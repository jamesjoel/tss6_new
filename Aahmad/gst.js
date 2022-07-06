var a = (price,slab)=> {
    switch(slab){
        case 1: var x = price*100/105;
               break;
        case 2: var x = price*100/108;
               break;
        case 3: var x = price*100/118;
               break;

    }
     return x;
}
var b = a(21000,2);
console.log(b);