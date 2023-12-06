/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global console, document, Excel, Office */

import { inject, injectable } from "inversify";
import { ExcelService } from "./excel-service";
// import  "office-js"
import { TaskHandler } from "./ExcelTaskHandler-interface";
import { ExcelType } from "../taskpane/types";

@injectable()
export class ExcelTaskHandler implements TaskHandler {
  excelService: ExcelService;
  constructor(@inject(ExcelType) private readonly _excelService: ExcelService) {
    this.excelService = _excelService;
    this.init();
  }

  init() {
    const self = this;
    Office.onReady(function () {
      document.getElementById("inp").onkeyup = self.excelService.keyUpFn;
      Excel.workbook.worksheets.onSelectionChanged.add(this.excelService.onCellChnge);
    });
  }
}
