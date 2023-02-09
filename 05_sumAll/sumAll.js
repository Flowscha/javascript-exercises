const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || b < 0 || typeof(a) != "number" || typeof(b) != "number")
    {return "ERROR"};

    if (a > b)
    {
        let temp = a;
        a = b;
        b = temp;
    }

    let start = a;
    let end = b;
    for (let i = start; i <= end; i++)
    {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
