import { Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({scope: Scope.TRANSIENT})
export class LoggerService extends Logger {
  error(msg: string, trace: string) {
    super.error(msg, trace);
    // add reportService
    throw new Error(msg);
  }
  
  log(msg: string) {
    super.log(msg);

       // add reportService
  }
  
  warn(msg: string) {
       // add reportService
    super.warn(msg);
  }
}

