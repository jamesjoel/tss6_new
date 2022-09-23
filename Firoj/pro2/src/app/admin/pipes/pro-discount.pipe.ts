import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'proDiscount'
})
export class ProDiscountPipe implements PipeTransform {

  transform(a :any, b : any) {
     let x = b*a/100;
     let y = b-x;
     return y ;
  }

}
