// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);
// console.log(number % 2 == 0);


// even number
/* function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

const myNumber = 1641;
const isMyNumber = isEven(myNumber);

const herNumber = 1892;
const isHerNumber = isEven(herNumber) */

// odd number

function isOddNumber(number){
    if(number % 2 !=0){
        return true;
    }
    return false;
}

const myNumber = 122;
const isMyNumberOdd = isOddNumber(myNumber);
console.log(isMyNumberOdd);