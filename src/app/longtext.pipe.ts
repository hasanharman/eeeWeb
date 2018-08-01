import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longtext'
})
export class LongtextPipe implements PipeTransform {

  transform(value: string, args?: number): any {
    let newText:string = '';
    if(value) {
    console.log(args,typeof(args));
    
      if(value.length >args) {
        for(let i = 0 ; i< args-1 ;i++) {
          
          if(i === args-2) {
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
