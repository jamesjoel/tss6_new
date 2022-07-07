var gst = (price , percent)=>{
switch(percent){
    case 1 : var x = (price/105)*5;
               var y = price-x;
                break;
    case 2 : var x = (price/108)*8;
               var y = price-x;
                break;
    case 3 : var x = (price/118)*18;
               var  y = price-x;
                

}
        var data = [y ,x];
        return data;
}

var a = gst(1500 , 3);
console.log("actual price with gst "+a+" ");






var gst = (price,gstpercent) =>{
    
    var x = (price / ( 100 + gstpercent)) * gstpercent;
    var y = price - x ;
     var z={actualprice : y , gstprice : x};
     return z;

}

var ans = gst(5000, 20);
console.table(ans);





var gst = (actual , withgst) =>{

    var x = (withgst - actual)/(actual/100);
         return x;

}

var ans = gst(4166.66, 5000);
console.log("gstpercent= "+ans+" ");