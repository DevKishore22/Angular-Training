import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortOut',
})
export class ShortOutPipe implements PipeTransform {
  transform(value: any, trimSize: any) {
    if (!value) return null;
    if (value.length > trimSize) {
      return value.substr(0, trimSize) + '...';
    }
    return value;
  }
}
