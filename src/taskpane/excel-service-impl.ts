import { inject, injectable } from "inversify";
import { LoggerServiceImpl } from "src/share/logger-service-impl";
import { ExcelService } from "./excel-service";
import { Symbols } from "./types";

@injectable()
export class ExcelServiceImpl implements ExcelService {
  constructor(@inject(Symbols.Logger) private readonly _loggerService: LoggerServiceImpl) {}
  async keyUpFn(event): Promise<any> {
    try {
      await Excel.run(async (context) => {
        const ranges = context.workbook.getActiveCell();
        ranges.values = event.target.value;
        this._loggerService.info("Selected cell is filled with entered input");
        return context.sync();
      });
    } catch (error) {
      this._loggerService.error(error?.message || error);
    }

    // }
  }

  onCellChnge(): void {
    let window: Window;
    (<HTMLInputElement>window.document.getElementById("inp")).value = "";
  }
}
