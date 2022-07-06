function gst(price, slab)
{
    switch(slab){
        
        case 1 : var x = price*5/100;
                
                break;

        case 2 : var x = price*8/100;
                
                break;

        case 3 : var x = price*18/100;
                
                break;
    }
    var y = price+x;
    return y;
}



var ans = gst(18000, 2);
console.log(ans);