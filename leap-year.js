function isLeapYear(year){
    if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}

const myYear = 2022;
const isMyYearLeapYear = isLeapYear(myYear);
console.log(isMyYearLeapYear)