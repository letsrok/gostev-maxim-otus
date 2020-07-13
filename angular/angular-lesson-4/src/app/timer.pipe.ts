import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let minutes = Math.floor(value/60).toString();
    let seconds = (value % 60).toString();
    return `${minutes}:${seconds}`;
  }

}
