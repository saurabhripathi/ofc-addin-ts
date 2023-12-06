import { injectable } from "inversify";
import { ExcelServiceInterface } from "../taskpane/excel-service-impl";
@injectable()
export class ExcelService implements ExcelServiceInterface {
  async keyUpFn(event): Promise<any> {
    try {
      await Excel.run(async (context) => {
        const ranges = context.workbook.getActiveCell();
        ranges.values = event.target.value;
        return context.sync();
      });
    } catch (error) {
      console.error(error);
    }

    // }
  }

  onCellChnge() {
    let window: Window;
    (<HTMLInputElement>window.document.getElementById("inp")).value = "";
  }
}
