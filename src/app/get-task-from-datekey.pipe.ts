import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTaskFromDatekey'
})
export class GetTaskFromDatekeyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let taskIndexKey=args[0] < 10 ? '0'+args[0] : ''+args[0];
    let dayKey=args[1];
    return value[taskIndexKey][dayKey];
  }

}
