const caesar = function(text, change) {
    let textnew = "";

    for (let i = 0; i < text.length; i++){
        if (text[i].match(/[a-z]/i)){      
            let converterToUni = text.charCodeAt(i);
            let changedValue = converterToUni + change;
            textnew += String.fromCharCode(changedValue);
        }else{
            textnew += text[i];
        }
    }
    return textnew;
};

// Do not edit below this line
module.exports = caesar;
