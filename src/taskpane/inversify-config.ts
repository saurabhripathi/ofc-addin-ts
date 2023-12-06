import { Container } from "inversify";
import { TaskHandler } from "../taskpane/ExcelTaskHandler-interface";
import { ExcelTaskHandler } from "../taskpane/excel";
import { Task, ExcelType } from "../taskpane/types";
import { ExcelService } from "../taskpane/excel-service";
import { ExcelServiceInterface } from "../taskpane/excel-service-impl";
const myContainer = new Container();
myContainer.bind<TaskHandler>(Task).to(ExcelTaskHandler);
myContainer.bind<ExcelServiceInterface>(ExcelType).to(ExcelService);

export { myContainer };
