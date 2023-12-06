export interface ExcelServiceInterface {
  keyUpFn(event: any): Promise<any>;
  onCellChnge(): void;
}
