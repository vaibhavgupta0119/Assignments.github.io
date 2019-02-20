function sum()
{
    var addition=0;
    for(var i=0;i<arguments.length;i++)
    {
        addition+=arguments[i];
    }
    return addition
}
console.log(sum(1,2,3))