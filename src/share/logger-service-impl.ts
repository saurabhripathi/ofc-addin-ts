import { injectable } from "inversify";
import { LoggerService } from "./logger-service";
@injectable()
export class LoggerServiceImpl implements LoggerService {
  constructor() {}
  info(info: string): void {
    console.log(info);
  }
  warn(warn: string) {
    console.warn(warn);
  }
  error(error: string) {
    console.error(error);
  }
}
