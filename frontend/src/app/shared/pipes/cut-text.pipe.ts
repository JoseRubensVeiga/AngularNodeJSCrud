import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText',
})
export class CutTextPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const newString = value.substr(0, 100);

    if (newString.length <= 97) {
      return newString;
    }

    return `${newString}...`;
  }
}
