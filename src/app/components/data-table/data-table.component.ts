import { Component, Input } from '@angular/core';
import { ApiData } from 'src/app/typings/api.typings';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() tableData: ApiData[];

  selectRow() {
    alert('selected');
  }
}
