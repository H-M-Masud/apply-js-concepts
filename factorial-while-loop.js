// factorial with while loop
/* 
function getFactorial(num){
    let factorial = 1;
    let i = 1;
    while(i <= num){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const firstFactorial = getFactorial(11);
console.log(firstFactorial)
 */
/* 
function getFactorial(number){
    let factorial = 1;
    let i = number;
    while(i >= 1){
        console.log(i);
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

 */

// for loop reverse
function getFactorial(number2){
    let factorial = 1;
    for(let i = number2; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}


const myFactorial = getFactorial(6);
console.log(myFactorial)