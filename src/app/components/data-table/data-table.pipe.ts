import { Pipe, PipeTransform } from '@angular/core';
/**
 * @description Extracts the keys from an array of objects to be used as table headers
 *
 * Usage:
 *   data | dataTable: 'headers'
 *   or
 *   data | dataTable: 'rows'
 * Examples:
 *   {{ [{id: '1', name: 'Dan'}, {id: '2', name: 'Rover'} | dataTable: 'headers' }}
 *   formats to: ['id', 'name']
 *
 *   {{ [{id: '1', name: 'Dan'}, {id: '2', name: 'Rover'} | dataTable: 'rows' }}
 *   formats to: [['1', 'Dan'], ['2', 'Rover']]
 */
@Pipe({ name: 'dataTable' })
export class DataTablePipe implements PipeTransform {
  transform(list: object[], format: 'headers' | 'rows'): any {
    switch (format) {
      case 'headers':
        return list[0] ? Object.keys(list[0]) : [];
      case 'rows':
        return list.map(item => Object.values(item));
      default:
        return list;
    }
  }
}
