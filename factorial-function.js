/* let factorial = 1;
for(let i = 1; i <= 5; i++){
    factorial  = factorial * i;
}
 */


function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial  = factorial * i;
    }
    return factorial;
}

const firstFactorial = getFactorial(9);
const secondFactorial = getFactorial(11);
console.log(firstFactorial)
console.log(secondFactorial)