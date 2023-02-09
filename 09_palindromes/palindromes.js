const palindromes = function (string) {
    let lowerCase = string.toLowerCase();
    lowerCase = lowerCase.replace(/[^a-z]/g,'');
    let reverseCase = "";
    let palindrome = lowerCase;
    
    for (let i = 1; i <= lowerCase.length; i++){
        reverseCase += palindrome.slice(-1);
        palindrome = palindrome.slice(0, -1);      
    }

    if (reverseCase === lowerCase){
        return true;
    }else{
        return false;
    }
    
};

// Do not edit below this line
module.exports = palindromes;
