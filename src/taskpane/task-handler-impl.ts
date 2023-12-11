/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global console, document, Excel, Office */

import { inject, injectable } from "inversify";
import { LoggerServiceImpl } from "src/share/logger-service-impl";
import { ExcelServiceImpl } from "./excel-service-impl";
// import  "office-js"
import { TaskHandler } from "./task-handler";
import { Symbols } from "./types";

@injectable()
export class TaskHandlerImpl implements TaskHandler {
  constructor(
    @inject(Symbols.ExcelType) private readonly _excelService: ExcelServiceImpl,
    @inject(Symbols.Logger) private readonly _loggerService: LoggerServiceImpl
  ) {
    this.init();
  }

  init() {
    Office.onReady(() => {
      this._loggerService.info("Office is ready");
      document.getElementById("inp").onkeyup = this._excelService.keyUpFn;
      Excel.workbook.worksheets.onSelectionChanged.add(this._excelService.onCellChnge);
    });
  }
}
