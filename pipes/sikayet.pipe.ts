import { Pipe } from '@angular/core';

@Pipe({
  name: 'sikayet'
})
export class SikayetPipe {
  transform(value) {
    if (value) {
      const words = value.split(' ');

      value = words.map((word) => word.substring(0, 1).toUpperCase() + word.substring(1)).join(' ');
    }
    return value;
  }
}
