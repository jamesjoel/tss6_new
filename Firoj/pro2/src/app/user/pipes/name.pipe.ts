import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value : any, gender : any) {
    
    if(gender == "Male"){
      return "Mr."+" "+ value;
    }else if(gender == "Female"){
      return "Mrs."+" "+ value;

    }else{
      return value;
    }

    
  }

}
