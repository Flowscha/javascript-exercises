const fibonacci = function(input) {
    let a = 0;
    let b = 1;
    let c = 1;
    let arr = [0];

    if (input < 0){
        return "OOPS";
    }
    for (let i = 0; i <= input; i++){
        arr.push(c);
        c = a + b;
        a = b;
        b = c;
    }
    input = parseInt(input);
    return arr[input];
};

// Do not edit below this line
module.exports = fibonacci;
