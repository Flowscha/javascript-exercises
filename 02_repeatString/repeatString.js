const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR";
    } else {
        let i = 0;
        let newstring = '';
        while (i < num){
        newstring += string;
        i++;
        }
        return newstring;
    }
};

// Do not edit below this line
module.exports = repeatString;
