//let and const
/* 
var name5 = 'jane Smite';
var age5 = 23;
name5 = 'jane miller';
console.log(name5);





const name6 = 'jane Smite';
let age6 = 23;
name6 = 'jane miller';
console.log(name6);


//ES5

function diversLicence5(passedTest){
    if (passedTest){
        var firstname =  'john';
        var yearOfBirth = 1990;

        console.log(firstname + 'born in' + yearOfBirth + 
        ' is now officially allowed to driver a car.');
    }
}

diversLicence6(true);



//ES6

function diversLicence6(passedTest){
    if (passedTest){
        let firstname =  'john';
        const yearOfBirth = 1990;

        console.log(firstname + 'born in' + yearOfBirth + 
        ' is now officially allowed to driver a car.');
    }
}

diversLicence6(true);



let i = 23;

for (let i = 0;i < 5; i ++){
    console.log(i);
}

console.log(i);






/////Blocks and IIFEs
 //ES6

{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
console.log(c);

//Es5
(function(){
    var c = 3;
})();





// Strings 

let firstName = 'john';
let lastName = 'Smith'; 
const yearOfBirth = 1995; 



function calAge(year) {
        return 2020 - year;
}

//ES5
console.log('This is' + firstName + '    ' + lastName +
' . He was born in ' + yearOfBirth + '. Today, he is ' + 
calAge(yearOfBirth) + ' years old.');


//ES6

console.log('this is ${firstName}');






// Arrow function 


const years = [1990, 1995, 1982, 1937];



var age5 = years.map(function(el){
    return 2020 - el;
});

console.log(age5);



const age6 = years.map(el => 2020 - el);

let.log(age6);


age6 = years.map((el, index) => )




//Arrow function 2 
///ES5

var box5 = {
    color:'green',
    position: 1,
    clickme:function() {
         
        var self  = this;
        document.querySelector('.green').addEventListener('click',function(){
            var str = 'this is box number ' + self.position +
            'and it is ' + self.color;
            alert(str);
        });
    }
}


//box5.clickme();

///ES6
const box6 = {
    color:'green',
    position: 1,
    clickme:function() {
       
        document.querySelector('.green').addEventListener('click',()=>{
            var str = 'this is box number ' + this.position +
            'and it is ' + this.color;
            alert(str);
        });
    }
}
*/

//box6.clickme();
/*
const box66 = {
    color:'green',
    position: 1,
    clickme:()=> {
       
        document.querySelector('.green').addEventListener('click',()=>{
            var str = 'this is box number ' + this.position +
            'and it is ' + this.color;
            alert(str);
        });
    }
}


box66.clickme();



function Person(name){
    this.name = name;
}

//ES5

Person.prototype.myFriends5 = function(){
    var arr = friends.map(function(el){
        return this.name + 'is friend with' + el ;
    }.bind(this));


    console.log(arr);
}

var friends = ['Bob', 'Jane','Mark'];
new Person('john').myFriends5(friends);


Person.prototype.myFriends6 = function(friend){
    var arr = friends.map(el => this.name + 'is friend with ' + el );

    console.log(arr);
}

new Person('mike').myFriends6(friends);

 



 //Destructuring

 //ES5

 var john = ['John',25];
 //var name = john[0];
 //var age = john[1];



 //ES6

 const [name, age] = ['john',25];
console.log(name);
console.log(age);


const obj = {
    firstname : 'John',
    lastName : 'Smith'
};

const {firstname,lastName} = obj;

console.log(firstname);
console.log(lastName);

const {firstname: a,lastName: b} = obj;

console.log(a);
console.log(b);



function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - year];
}

const [age2, retirement] = calcAgeRetirement(1995);
console.log(age2);
console.log(retirement);



////////Arrays
const boxes = document.querySelectorAll('.box');

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.foreach(function(cur){

        cur.style.backgroundColor = 'dodgerblue';

});



//ES6 
//const boxes = document.querySelectorAll('.box');
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');



//ES5

for(var i = 0; i < boxesArr5.length; i++){
    if (boxesArr5[i].className === 'box blue'){
        //continue;
        break;
    }
    boxesArr5[i].textContent = 'I changed to blue!'
}


//ES6

for(const cur of boxesArr6){
    if (cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue!';


}
 
//ES5

var ages = [12 ,17 ,8,21, 14,11];

var full = ages.map(function(cur){
    return cur >= 18;
});

console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6

console.log(ages.findIndex(cur => cur >= 18 ));

console.log(ages.find(cur => cur >= 18 ));



//Spread operator


function addFourAges (a,b,c,d){
    return a+ b+c+d;
}

var sum1  = addFourAges(18,20,12,21);

console.log(sum1);

var ages = [18,30,12,21];
var sum2 = addFourAges.apply(null,ages);
console.log(sum2);


//ES6

const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith  = ['john','jane','mark'];
const familymiller = ['mary','bob','ann'];

const bigfamily = [...familySmith,'lilly',...familymiller];
console.log(bigfamily);



const h = document.querySelector('h1');

const boxes = document.querySelectorAll('.box');
const all = [h,...boxes];


Array.from(all).forEach(cur => cur.style.color = 'purple');






/// Rest paramrters

  function isFullAge5(){
      //console.log(argument);
      var argsArr = Array.prototype.slice.call(arguments);

      argsArr.foreach(function(cur){
            console.log((2020-cur)>=18);
      });
  }

  //isFullAge5(1990,1999,1965);
  //isFullAge5(1990,1999,1965,2016,1987);


  //ES6 

  function isFullAge6(...years){
     years.forEach(cur => console.log((2020 - cur) >= 18));
  }

  isFullAge6(1990,1999,1965);






//Default parameters


function SmithPerson(firstname,yearOfBirth,lastName,nationality){
    
            lastName === undefined ? lastName = 'smith': lastName = lastName ;
            nationality === undefined ? nationality = 'american' : nationality = nationality;
        this.firstname = firstname;
        this.lastName = lastName;
        this.yearOfBirth  = yearOfBirth;
        this.nationality = nationality;

}


//ES6

function SmithPerson(firstname,yearOfBirth, lastName = 'smith',nationality = 'american'){
            this.firstname = firstname;
            this.lastName = lastName;
            this.yearOfBirth = yearOfBirth;
            this.nationality = nationality;
}

var john  = new SmithPerson ('john',1995);
var emily = new SmithPerson ('Emily',1995,'Diaz','spanish');




/////MAP


const question = new Map();
question.set('question','what is the offical name of the lateste major Javascirpt version');


question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct',3);
question.set(true,'Correct answer:D');
question.set(false,'Wrong, please try again!');


console.log(question.get('question'));
console.log(question.size);

if(question.has(4)){
    console.log('Answer 4 is here')
}


question.forEach((value, key)=>
 console.log('this is' + key + ', and it set to ' + value));



 for(let [key, value] of question.entries()){
    
        if(typeof(key) === 'number'){
            console.log('Answer' + key + value);
        }

 }

 const ans = parseInt(prompt('Write the correct answer'));

 console.log(question.get(ans === question.get('correct')));
 
 



 ///Class


 //ES5

 var Person5 = function(name,yearOfBirth,job){
     this.name = name;
     this.yearOfBirth = yearOfBirth;
     this.job = job;
 }


 Person5 .prototype.calculateAge = function(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
 }

 var john5 = new Person5('john',1990,'teacher');

 //ES6

 class Person6{
     constructor(name,yearOfBirth,job){
         this.name = name;
         this.yearOfBirth = yearOfBirth;
         this.job = job;
     }

     calculateAge(){
         var age = new Date().getFullYear() - this.yearOfBirth;
         console.log(age);
     }

     static greeting(){
         console.log('Hey there!!')
     }
 }


const john6 = new Person6('john',1995,'teacher');


Person6.greeting();




var Person5 = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}


Person5 .prototype.calculateAge = function(){
       var age = new Date().getFullYear() - this.yearOfBirth;
       console.log(age);
}



var Athlete5 = function(name,yearOfBirth,job,olymicGames,medals){
    Person5.call(this, name,yearOfBirth,job);
    this.olymicGames = olymicGames;
    this.medals = medals;

}


Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}



Athlete5.prototype = Object.create(Person5.prototype);

var johnAthlete5 = new Athlete5('john',1990,'swimmer',3,10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
 


//ES6

class Person6{
    constructor(name,yearOfBirth,job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log('Hey there!!')
    }
}

class Athlete6 extends Person6{
    constructor(name,yearOfBirth,job,olymicGames,medals){
        super(name, yearOfBirth, job);
        this.olymicGames = olymicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('john',1990,'swimmer',3,10);

        johnAthlete6.wonMedal();
        johnAthlete6.calculateAge();






 class Element {
     constructor(name, buildyear){
         this.name = name;
         this.buildyear = buildyear;
     }
 }

 class Park extends Element {
     constructor(name,buildyear, area,numTress){
         super(name,buildyear);
         this.area = area;
         this.numTress = numTress;
     }

     treeDensity(){
         const density = this.numTress / this.area;
         console.log(this.name + ' has a tree density of' + density + 'trees per square km.');
     }
 }


 class Street  extends Element{
     constructor(name,buildyear,length,size){
         super(name, buildyear);
         this.length = length;
         this.size = size;
     }

     classifyStreet{
         const classification = new Map();
         classification.set(1, 'tiny');
     }
 }

 */