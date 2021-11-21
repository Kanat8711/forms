import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkStringNumber'
})
export class CheckStringNumberPipe implements PipeTransform {

  transform(value: string| number): string | number {
    const textOrNumber = Number(value);
    if (Number.isNaN(textOrNumber)) {
      return value;
    } else {
      return textOrNumber.toFixed(2);
    }
  }

}
