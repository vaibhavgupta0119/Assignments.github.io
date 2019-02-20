function add(x)
{
    return function(y)
    {
        if(typeof y!=='undefined')
        {
            x=x+y;
            return arguments.callee;
        }
        else{
            return x;
        }
    }
}
var a= add(1)(2)()
console.log(a)