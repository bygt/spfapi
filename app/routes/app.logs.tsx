import { useState, useEffect } from "react";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSubmit, Form } from "@remix-run/react";
import { authenticate } from "../shopify.server";
import { LogLevel } from "../utils/logger";

interface LogEntry {
  id: string;
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: Record<string, any>;
  source?: string;
}

interface LogStats {
  total: number;
  lastHour: number;
  lastDay: number;
  byLevel: Record<LogLevel, number>;
  lastHourByLevel: Record<LogLevel, number>;
}

interface LoaderData {
  logs: LogEntry[];
  stats: LogStats;
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { admin } = await authenticate.admin(request);
  return json({ logs: [], stats: {} });
};

export default function LogsPage() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [stats, setStats] = useState<LogStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    level: '',
    source: '',
    startDate: '',
    endDate: '',
    limit: '100'
  });

  const submit = useSubmit();

  useEffect(() => {
    loadLogs();
  }, [filters]);

  const loadLogs = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.level) params.append('level', filters.level);
      if (filters.source) params.append('source', filters.source);
      if (filters.startDate) params.append('startDate', filters.startDate);
      if (filters.endDate) params.append('endDate', filters.endDate);
      if (filters.limit) params.append('limit', filters.limit);

      const response = await fetch(`/api/logs?${params.toString()}`);
      const data = await response.json();
      
      if (data.success) {
        setLogs(data.logs || []);
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Loglar yüklenirken hata:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearLogs = (level?: LogLevel) => {
    const formData = new FormData();
    formData.append('action', 'clear');
    if (level) formData.append('level', level);
    
    submit(formData, { method: 'post', action: '/api/logs' });
  };

  const handleExportLogs = () => {
    const formData = new FormData();
    formData.append('action', 'export');
    
    submit(formData, { method: 'post', action: '/api/logs' });
  };

  const getLevelColor = (level: LogLevel) => {
    switch (level) {
      case LogLevel.ERROR: return 'bg-red-100 text-red-800';
      case LogLevel.WARNING: return 'bg-yellow-100 text-yellow-800';
      case LogLevel.INFO: return 'bg-blue-100 text-blue-800';
      case LogLevel.DEBUG: return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('tr-TR');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sistem Logları</h1>
        <p className="text-gray-600">Uygulama aktivitelerini ve hatalarını takip edin</p>
      </div>

      {/* İstatistikler */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Toplam Log</h3>
            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Son 1 Saat</h3>
            <p className="text-2xl font-bold text-blue-600">{stats.lastHour}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Son 24 Saat</h3>
            <p className="text-2xl font-bold text-green-600">{stats.lastDay}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Hata Sayısı</h3>
            <p className="text-2xl font-bold text-red-600">{stats.byLevel?.ERROR || 0}</p>
          </div>
        </div>
      )}

      {/* Filtreler */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Log Seviyesi</label>
            <select
              value={filters.level}
              onChange={(e) => setFilters({...filters, level: e.target.value})}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">Tümü</option>
              <option value={LogLevel.INFO}>INFO</option>
              <option value={LogLevel.WARNING}>WARNING</option>
              <option value={LogLevel.ERROR}>ERROR</option>
              <option value={LogLevel.DEBUG}>DEBUG</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kaynak</label>
            <input
              type="text"
              value={filters.source}
              onChange={(e) => setFilters({...filters, source: e.target.value})}
              placeholder="API endpoint"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Başlangıç Tarihi</label>
            <input
              type="datetime-local"
              value={filters.startDate}
              onChange={(e) => setFilters({...filters, startDate: e.target.value})}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bitiş Tarihi</label>
            <input
              type="datetime-local"
              value={filters.endDate}
              onChange={(e) => setFilters({...filters, endDate: e.target.value})}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Limit</label>
            <select
              value={filters.limit}
              onChange={(e) => setFilters({...filters, limit: e.target.value})}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="250">250</option>
              <option value="500">500</option>
            </select>
          </div>
        </div>
      </div>

      {/* Aksiyonlar */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => handleClearLogs()}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Tüm Logları Temizle
        </button>
        
        <button
          onClick={() => handleClearLogs(LogLevel.ERROR)}
          className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
        >
          Sadece Hataları Temizle
        </button>
        
        <button
          onClick={handleExportLogs}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          CSV Olarak İndir
        </button>
        
        <button
          onClick={loadLogs}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Yenile
        </button>
      </div>

      {/* Log Listesi */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Log Kayıtları ({logs.length})
          </h3>
        </div>
        
        {loading ? (
          <div className="p-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-2 text-gray-600">Loglar yükleniyor...</p>
          </div>
        ) : logs.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            Log kaydı bulunamadı
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Zaman
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Seviye
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mesaj
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kaynak
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Detay
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatTimestamp(log.timestamp)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getLevelColor(log.level)}`}>
                        {log.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-md truncate">
                      {log.message}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {log.source || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {log.context ? (
                        <details className="cursor-pointer">
                          <summary className="text-blue-600 hover:text-blue-800">
                            Detayları Göster
                          </summary>
                          <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto max-w-xs">
                            {JSON.stringify(log.context, null, 2)}
                          </pre>
                        </details>
                      ) : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
