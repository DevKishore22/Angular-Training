import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longDate',
})
export class LongDatePipe implements PipeTransform {
  fullDate: any;
  shortDate: any;
  inputDate: any;
  transform(date: any) {
    if (!date) return null;

    const [day, month, year] = date.split('-');
    this.inputDate = year + '-' + month + '-' + day;
    this.fullDate = new Date(this.inputDate);
    this.shortDate = this.fullDate
      .toLocaleString('en-US', {
        month: 'long',
        day: '2-digit',
        weekday: 'long',
      })
      .split(' ')
      .slice(0, -1);

    return (
      this.shortDate[0].replace(',', '') +
      ' ' +
      day +
      ',' +
      this.shortDate[1] +
      ' ' +
      month +
      ',' +
      year
    );
  }
}
