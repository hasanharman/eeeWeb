import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notTurkish'
})
export class NotTurkishPipe implements PipeTransform {

  transform(value: any, ...args): any {
    if (value) {
           return this.detectIfHasTurkLatters(value);

    }
  }

  detectIfHasTurkLatters(text: string):string {
    let newText: string = '';
    for (let l = 0; l < text.length; l++) {
      switch (text[l]) {
        case 'ş':
          newText += 's';
          break;
          
          case 'ü':
          newText += 'u';
          break;
          
          case 'ö':
          newText += 'o';
          break;

          case 'ğ':
          newText += 'g';
          break;

          case 'ı':
          newText += 'i';
          break;

          case 'ş':
          newText += 's';
          break;

          case 'ç':
          newText += 'c';
          break;

        default:
          newText += text[l];
          break;
      }

    }
    return newText
  }

}
