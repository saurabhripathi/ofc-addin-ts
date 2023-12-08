import "reflect-metadata";
/// <reference path="../../node_modules/@types/office-js/index.d.ts" />
import { myContainer } from "./inversify-config";
import { Symbols } from "../taskpane/types";
import { TaskHandler } from "./task-handler";
const excelTaskHandler = myContainer.get<TaskHandler>(Symbols.Task);
