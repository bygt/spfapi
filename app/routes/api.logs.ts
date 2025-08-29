import { json, type LoaderFunctionArgs, type ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { logger, LogLevel } from "../utils/logger";

interface LogsResponse {
  success: boolean;
  logs?: any[];
  stats?: any;
  message?: string;
  error?: string;
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const { admin } = await authenticate.admin(request);
    
    const url = new URL(request.url);
    const level = url.searchParams.get('level') as LogLevel | null;
    const limit = parseInt(url.searchParams.get('limit') || '100');
    const source = url.searchParams.get('source');
    const startDate = url.searchParams.get('startDate');
    const endDate = url.searchParams.get('endDate');

    let logs = logger.getLogs(level, limit);

    // Zaman aralığı filtresi
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      logs = logger.getLogsByTimeRange(start, end, level);
    }

    // Source filtresi
    if (source) {
      logs = logs.filter(log => log.source === source);
    }

    // Log istatistikleri
    const stats = logger.getStats();

    return json<LogsResponse>({
      success: true,
      logs: logs.map(log => ({
        ...log,
        timestamp: log.timestamp.toISOString()
      })),
      stats
    });

  } catch (error) {
    logger.error("Log listesi alınırken hata oluştu", { error }, "api.logs");
    
    return json<LogsResponse>({
      success: false,
      error: "Log listesi alınırken hata oluştu",
    }, { status: 500 });
  }
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const { admin } = await authenticate.admin(request);
    
    if (request.method !== "POST") {
      return json({ success: false, error: "Method not allowed" }, { status: 405 });
    }

    const formData = await request.formData();
    const action = formData.get('action') as string;

    switch (action) {
      case 'clear':
        const level = formData.get('level') as LogLevel | null;
        if (level) {
          logger.clearLogsByLevel(level);
        } else {
          logger.clearLogs();
        }
        return json<LogsResponse>({
          success: true,
          message: level ? `${level} seviyesindeki loglar temizlendi` : "Tüm loglar temizlendi"
        });

      case 'export':
        const logs = logger.getLogs();
        const csvContent = generateCSV(logs);
        return new Response(csvContent, {
          headers: {
            'Content-Type': 'text/csv',
            'Content-Disposition': 'attachment; filename="logs.csv"'
          }
        });

      default:
        return json<LogsResponse>({
          success: false,
          error: "Geçersiz işlem"
        }, { status: 400 });
    }

  } catch (error) {
    logger.error("Log işlemi sırasında hata oluştu", { error }, "api.logs");
    
    return json<LogsResponse>({
      success: false,
      error: "Log işlemi sırasında hata oluştu",
    }, { status: 500 });
  }
};

function generateCSV(logs: any[]): string {
  const headers = ['ID', 'Timestamp', 'Level', 'Message', 'Source', 'Context'];
  const rows = logs.map(log => [
    log.id,
    log.timestamp.toISOString(),
    log.level,
    log.message,
    log.source || '',
    log.context ? JSON.stringify(log.context) : ''
  ]);

  const csvContent = [headers.join(','), ...rows.map(row => 
    row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')
  )].join('\n');

  return csvContent;
}
