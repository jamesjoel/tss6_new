var arr = [];

for(var i = 3; i <= 100; i++)
{
    var check = true;
    for(var j = 2; j < i; j++)
    {
        if(i % j == 0)
        {
            check = false;
            break;
        }
    }

    if(check == true)
    {
        arr.push(i);
    }
}


console.log(arr);