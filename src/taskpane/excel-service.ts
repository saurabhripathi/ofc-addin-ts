export interface ExcelService {
  keyUpFn(event: any): Promise<any>;
  onCellChnge(): void;
}
