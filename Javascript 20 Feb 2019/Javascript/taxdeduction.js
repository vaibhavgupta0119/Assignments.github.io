var tax = [{ type:"hra", per: 5 },
{ type: "da", per: 10 },
{ type: "fine", per: 15 },
{ type: "service", per: 20 },
{ type: "fare", per: 25 },
{type:"Not Valid",per:0}];

function calc(types, amount) {
    var deduction;
    var typeOftax;
    var perc;
    var deductedAmount;
    for (var i = 0; i < tax.length; i++) 
    {
        if (tax[i].type == types) 
        {
            typeOftax = types;
            perc = tax[i].per;
        }
        // else{
        //     typeOftax="Not Valid";
        //     perc=0;
        // }
        deduction = (amount * perc)/100;
        deductedAmount = amount - deduction;
    }
    var object = { "Type": typeOftax, "Amount": amount, "Percentage": perc, "Deducted Amount": deduction, "Amount After Deduction": deductedAmount };
return object;
}
console.log(calc("rgnhyn",2));

