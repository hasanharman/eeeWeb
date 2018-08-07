import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if(value) {
      let newText:string='';
      for(let i=0;i<value.length;i++){
          if(value[i]!== ' ') {
            newText+=value[i];            
          }   
      }
      return newText;
    }
    else 
    return '';
  }

}
