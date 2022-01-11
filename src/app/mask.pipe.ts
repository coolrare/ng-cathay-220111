import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, len: number = 5, chars: string = '***'): string {
    return value.substring(0, len) + chars;
  }

}
