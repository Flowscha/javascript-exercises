const reverseString = function(string) {
    let reverse = '';
    let counter = string.length;
    
    for (let i = 0; i < counter; i++)
    {
        reverse += string.slice(-1);
        string = string.slice(0, -1);
    }
    return reverse
};

// Do not edit below this line
module.exports = reverseString;
