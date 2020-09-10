///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1995);

function calculateAge(year){
    console.log(2020 - year);
}





var retirement = function(year){
    console.log(65- (2020 - year));
}

////variable

console.log(age);

var age = 23;


function foo(){
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/
///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a+c);
}

*/


///////////////////////////////////////
// Lecture: The this keyword

/**
    calculateAge(1995)

function calculateAge(year){
    console.log(2020 - year);
    console.log(this);
}
*/


var john = {
    name:'john',
    yearOfBrith:1995,
    calculateAge: function(){
        console.log(this);
        console.log(2020 - 
            this.yearOfBrith);

                function innerfunction(){
                    console.log(this);
                }
               innerfunction(); 
            }
        }

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBrith: 1995
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();




