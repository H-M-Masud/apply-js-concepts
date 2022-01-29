function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var myFeet = inchToFeet(myInches);
console.log(myFeet)