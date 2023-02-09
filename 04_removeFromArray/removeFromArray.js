const removeFromArray = function(array, arg, arg2, arg3, arg4) {
    let newArray = array.filter(function(number) {
        return number !== arg && number !== arg2 && number !== arg3 && number !== arg4;
    });


    return newArray; 
};

// Do not edit below this line
module.exports = removeFromArray;
