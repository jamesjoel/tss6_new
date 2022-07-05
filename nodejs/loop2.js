var x = 107;
var check = true;

for(var i = 2; i < x; i++)
{
    if(x % i == 0)
    {
        check = false;
        break;
    }
}

if(check==true){
    console.log("the "+x+" is prime number");
}
else{
    console.log("the "+x+" is not prime number");

}