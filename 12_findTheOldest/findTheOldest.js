const findTheOldest = function(input) {
    
    console.log(input[0].yearOfDeath);

    for (let i = 0; i < input.length; i++){
        if (input[i].yearOfDeath === undefined){
            input[i].yearOfDeath = new Date().getFullYear()
        }
        input[i].age = input[i].yearOfDeath - input[i].yearOfBirth;
    }

    input.sort((a,b) => {
        return b.age - a.age
    });

    for (let i = 0; i < input.length; i++){
        delete input[i].age
        if (input[i].yearOfDeath === 2023){
            delete input[i].yearOfDeath;
        }
    }

    return input[0];
};

// Do not edit below this line
module.exports = findTheOldest;
