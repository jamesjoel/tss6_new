// for( var a=1; a<=5; a++)
// {
//     console.log("Welcome");
// }

// for( var a=1; a<=10; a++)
// {
//     console.log(a*9);
// }


// for(var a=1; a<=50; a++)
// {
//     if(a%2!=0)
//    {console.log(a);}
// }

// var total=1;
// var a=4;
// for(var b=a; b>=1; b--)
// {
//     if(total*=b);
//     {
//         console.log(total);
//     }
// }






var x=72;
var check=true;
for( var a=2; a<x; a++)
{  
  if(x%a==0)
    {  check=false;
        break;
        
    }
}
if(check)
{
    console.log("yes")
}
else{
    console.log("no")
}