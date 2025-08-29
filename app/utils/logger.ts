export enum LogLevel {
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  DEBUG = 'DEBUG'
}

export interface LogEntry {
  id: string;
  timestamp: Date;
  level: LogLevel;
  message: string;
  context?: Record<string, any>;
  source?: string;
}

class Logger {
  private logs: LogEntry[] = [];
  private maxLogs = 1000; // Maksimum log sayısı
  private errorThreshold = 10; // Hata sayısı eşiği

  private addLog(level: LogLevel, message: string, context?: Record<string, any>, source?: string) {
    const logEntry: LogEntry = {
      id: this.generateId(),
      timestamp: new Date(),
      level,
      message,
      context,
      source
    };

    this.logs.unshift(logEntry); // Yeni logları başa ekle

    // Maksimum log sayısını aşarsa eski logları sil
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(0, this.maxLogs);
    }

    // Console'a da yazdır
    const timestamp = logEntry.timestamp.toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    
    switch (level) {
      case LogLevel.ERROR:
        console.error(logMessage, context || '');
        break;
      case LogLevel.WARNING:
        console.warn(logMessage, context || '');
        break;
      case LogLevel.DEBUG:
        console.debug(logMessage, context || '');
        break;
      default:
        console.log(logMessage, context || '');
    }

    // Hata sayısını kontrol et ve alarm ver
    this.checkErrorThreshold();
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private checkErrorThreshold() {
    const recentErrors = this.logs
      .filter(log => log.level === LogLevel.ERROR)
      .filter(log => {
        const timeDiff = Date.now() - log.timestamp.getTime();
        return timeDiff < 60 * 60 * 1000; // Son 1 saat
      });

    if (recentErrors.length >= this.errorThreshold) {
      console.warn(`⚠️ ALARM: Son 1 saatte ${recentErrors.length} hata oluştu!`);
    }
  }

  info(message: string, context?: Record<string, any>, source?: string) {
    this.addLog(LogLevel.INFO, message, context, source);
  }

  warning(message: string, context?: Record<string, any>, source?: string) {
    this.addLog(LogLevel.WARNING, message, context, source);
  }

  error(message: string, context?: Record<string, any>, source?: string) {
    this.addLog(LogLevel.ERROR, message, context, source);
  }

  debug(message: string, context?: Record<string, any>, source?: string) {
    this.addLog(LogLevel.DEBUG, message, context, source);
  }

  // Log'ları getir
  getLogs(level?: LogLevel, limit?: number): LogEntry[] {
    let filteredLogs = this.logs;
    
    if (level) {
      filteredLogs = filteredLogs.filter(log => log.level === level);
    }

    if (limit) {
      filteredLogs = filteredLogs.slice(0, limit);
    }

    return filteredLogs;
  }

  // Belirli bir zaman aralığındaki log'ları getir
  getLogsByTimeRange(startTime: Date, endTime: Date, level?: LogLevel): LogEntry[] {
    let filteredLogs = this.logs.filter(log => 
      log.timestamp >= startTime && log.timestamp <= endTime
    );

    if (level) {
      filteredLogs = filteredLogs.filter(log => log.level === level);
    }

    return filteredLogs;
  }

  // Log istatistiklerini getir
  getStats() {
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const lastHourLogs = this.logs.filter(log => log.timestamp >= oneHourAgo);
    const lastDayLogs = this.logs.filter(log => log.timestamp >= oneDayAgo);

    return {
      total: this.logs.length,
      lastHour: lastHourLogs.length,
      lastDay: lastDayLogs.length,
      byLevel: {
        INFO: this.logs.filter(log => log.level === LogLevel.INFO).length,
        WARNING: this.logs.filter(log => log.level === LogLevel.WARNING).length,
        ERROR: this.logs.filter(log => log.level === LogLevel.ERROR).length,
        DEBUG: this.logs.filter(log => log.level === LogLevel.DEBUG).length,
      },
      lastHourByLevel: {
        INFO: lastHourLogs.filter(log => log.level === LogLevel.INFO).length,
        WARNING: lastHourLogs.filter(log => log.level === LogLevel.WARNING).length,
        ERROR: lastHourLogs.filter(log => log.level === LogLevel.ERROR).length,
        DEBUG: lastHourLogs.filter(log => log.level === LogLevel.DEBUG).length,
      }
    };
  }

  // Log'ları temizle
  clearLogs() {
    this.logs = [];
  }

  // Belirli bir seviyedeki log'ları temizle
  clearLogsByLevel(level: LogLevel) {
    this.logs = this.logs.filter(log => log.level !== level);
  }
}

// Singleton logger instance
export const logger = new Logger();
