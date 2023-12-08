import { Container } from "inversify";
import { TaskHandler } from "./task-handler";
import { TaskHandlerImpl } from "./task-handler-impl";
import { Symbols } from "../taskpane/types";
import { ExcelServiceImpl } from "./excel-service-impl";
import { ExcelService } from "./excel-service";
import { LoggerService } from "src/share/logger-service";
import { LoggerServiceImpl } from "src/share/logger-service-impl";

const myContainer = new Container();
myContainer.bind<TaskHandler>(Symbols.Task).to(TaskHandlerImpl);
myContainer.bind<ExcelService>(Symbols.ExcelType).to(ExcelServiceImpl);
myContainer.bind<LoggerService>(Symbols.Logger).to(LoggerServiceImpl);

export { myContainer };
