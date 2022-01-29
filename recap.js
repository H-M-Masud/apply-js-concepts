// variable
var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;


// array
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajid');
partners.pop();

// conditionals
if(bookPrice < 120){
    console.log(' I will buy this book');
}
else{
    console.log('Please some discount')
}

// loop

var i = 0;
while(i <= 17){
    i++;
}

for(var i = 0; i<=17; i++){

}

// function

function isMoonUp(time){
    if(time >= 19 && time <= 5){
        return true;
    }
    return false;
}

var moonStatus = isMoonUp();

// let const