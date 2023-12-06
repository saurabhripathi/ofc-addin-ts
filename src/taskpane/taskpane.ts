import "reflect-metadata";
/// <reference path="../../node_modules/@types/office-js/index.d.ts" />
import { myContainer } from "./inversify-config";
import { Task } from "../taskpane/types";
import { TaskHandler } from "../taskpane/ExcelTaskHandler-interface";
const excelTaskHandler = myContainer.get<TaskHandler>(Task);
