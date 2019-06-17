import {
  Component,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { ApiData } from 'src/app/typings/api.typings';
import { DataTablePipe } from './data-table.pipe';

@Component({
  selector: 'app-component-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  providers: [DataTablePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent {
  constructor(private dataTablePipe: DataTablePipe) {}

  private _tableData: ApiData[];
  private _dataTableHeaders: string[];
  private _dataTableRows: string[][];
  private _activeRowIndex: number | null;

  @Input() selectingDisabled: boolean;

  @Input() set tableData(data: ApiData[]) {
    this._activeRowIndex = null;
    this._tableData = data;
    this._dataTableHeaders = this.dataTablePipe.transform(data, 'headers');
    this._dataTableRows = this.dataTablePipe.transform(data, 'rows');
  }
  @Output()
  activeRow: EventEmitter<ApiData | null> = new EventEmitter<ApiData | null>();

  get tableData() {
    return this._tableData;
  }

  get dataTableHeaders(): string[] {
    return this._dataTableHeaders;
  }

  get dataTableRows(): string[][] {
    return this._dataTableRows;
  }

  get activeRowIndex(): number | null {
    return this._activeRowIndex;
  }

  public selectRow(rowIndex: number) {
    if (this.selectingDisabled) {
      return;
    }
    if (this.activeRowIndex === rowIndex) {
      this.activeRow.emit();
      this._activeRowIndex = null;
    } else {
      this.activeRow.emit(this.tableData[rowIndex]);
      this._activeRowIndex = rowIndex;
    }
  }
}
