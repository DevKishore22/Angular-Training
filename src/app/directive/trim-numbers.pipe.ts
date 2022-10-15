import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimNumbers'
})
export class TrimNumbersPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
