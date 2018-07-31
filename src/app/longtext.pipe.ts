import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longtext'
})
export class LongtextPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let newText:string = '';
    if(value) {
      if(value.length >42) {
        for(let i = 0 ; i< 41 ;i++) {
          
          if(i === 40) {
            newText+= '...'
            return newText;
          }
          else{
            newText += value[i];
           }
          
        }
        console.log(newText)
      }
      else {
        return value;
      }
    }
    
    return null;
  }

}
