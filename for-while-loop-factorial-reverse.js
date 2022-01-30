/*****************factorial with for loop of 9*****************/

/* 
function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
} */


/*****************factorial with for loop reverse of 9*****************/
/* 
function getFactorial(number){
    let factorial = 1;
    for(let i = number; i >= 1; i--){
        console.log(i)
        factorial = factorial * i;
    }
    return factorial;
}
 */


/*****************factorial with while loop of 9*****************/
/* 
function getFactorial(number){
    let factorial = 1;
    let i = 1;
    while(i <= number){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
 */



/*****************factorial with for while reverse of 9*****************/
/* 
function getFactorial(number){
    let factorial = 1;
    let i = number;
    while( i >= 1){
        console.log(i)
        factorial = factorial * i;
        i--;
    }

    return factorial;
}
 */
const firstFactorial = getFactorial(9);
console.log('reverse factorial result with while loop= ',firstFactorial)