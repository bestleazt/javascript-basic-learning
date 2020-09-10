

    /*

  var fullage = true;

  console.log(fullage);


  var job;
  console.log(job);


job = 'Teacher';
console.log(job);





var firstname = 'Best';
var lastname ='jantaramat';
age = 25;

var job,married;
job = 'teacher';
isMarried = false;



  console.log(firstname + 'is a ' + age + 'year old'
  + job + '.Is hre married?' + isMarried);
  
  
  ager = 'twenty eighyt';
  job = 'driver';


  alert(firstname + 'is a ' + age + 'year old'
  + job + '.Is hre married?' + isMarried); 
  var lastname  = prompt('What is his lastname');

  console.log(firstname + ''+lastname);





*/


/*****Basc operators***/

/** 
var year, yearbest, yearmark
var now = 2020;

agebest = 25;
agemark = 33;
*/
//** Math*/

/** 

var yearBest = now - agebest;
var yearmark =  now - agemark;


console.log(yearBest);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);*/
//* logical operators*///



/* 
var bestolder = agebest < agemark;
console.log(bestolder);
*/
//***  type of operator*/

/** 

 console.log(typeof bestolder);
 console.log(typeof agebest);
 console.log(typeof 'Mark is older the john');
 var x;

 console.log(typeof x);
 
 */

//***Grouping****////
//var average = agebest + agemark / 2;


//***Multipke assiments****////

/**
 * 
 
var x,y;
x = y = (3 + 5) * 4 - 6; 
console.log(x, y); 
*/
// 2 + 4 + 5


//****More operators*****////
/** 
x *= 2;
console.log(x);
x += 10;
console.log(x);

x = x + 1;
x += 1;
x--;

console.log(x);




var massMark = 78;
var  heightMark = 1.69; 

var massJohn = 92;
var heightJohn = 1.95

var BMIMark = massMark /(heightMark * heightMark);
var BMIJohn = massJohn /(heightJohn * heightJohn);

var markHigherBMI = BMIMark > BMIJohn;

console.log('Is Mark\'s BMI higher than john\'s?' 
+ markHigherBMI);

*/


/* if else statements

var firstname = 'john';
var civilStatus = 'single';

if (civilStatus ==='married'){
    console.log('He not single');
}else{
    console.log('He single');
}

var isMarried = false;

if(isMarried === true){
    console.log(firstname + 'is married');
}else{
    console.log(firstname + 'Single');
}

*/


/* Boolean Logic 

var firsname = 'Best';
var age = 20;

if(age <  13){
    console.log(firsname + 'is a than 23');
}else if(age >= 13 && age < 20){
    console.log(firsname + 'is ==');
}else if(age >= 20 && age < 30){
    console.log(firsname + 'is ==+++');
}else{
    console.log(firsname + 'this less 23');
}
*/



/*The ternary Operator and Swich Statement
var firstName = 'Best';
var age = 25;
 
age >= 18 ? console.log(firstName + 'drink beer.')
: console.log(firstName + 'drinks juice');


var  drink = age >= 18 ? 'beer' : 'juice';
    console.log(drink);
  


var job ='teacher';

switch(job){
    case 'teacher':
    case 'instructor':
    console.log(firstName + 'teacher kids how to code');
    break;
    case 'driver':
        console.log(firstName + 'drives an uber in Lisbon');
    break;
    case 'designer':
        console.log(firstName + 'design beuatiful website');
    break;
    default:
        console.log(firstName + 'does something else.');
}


age = 10;

switch(true){
    case age < 13:
        console.log(firstName + 'is a boy.');
        break;
     case age >= 13 && age < 20:
        console.log(firstName + 'is a teenager');
        break;
        case age >= 20 && age < 30:
        console.log(firstName + 'is a young man.');
        break;
        default:
            console.log(firstName + 'is a man');
        
}

*/

/*Truthy and Falsy values and equality operators

    falsy value : undefind, null, 0 , '', NaN 
    truthy values: NOT falsy values 
   

 var height;
 
 height = '23';
 
 if(height  ||  height === 0 ){
     console.log('Variable is defind');
 }else{
     console.log('Variable has Not been defind');
 }



if(height == '23'){
    console.log('The == operator dose type coercion!');
}


 


 var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105)/3;
console.log(scoreJohn,scoreMike,scoreMary);


      if(scoreJohn > scoreMike && scoreJohn) {
          console.log('John team wins with' + scoreJohn + 'points' );
      } else if(scoreMike > score && scoreMike > scoreMary){
        console.log('John team wins with' + scoreMike + 'points' );
      }else if(scoreMary > score && scoremike > scoreMary){
        console.log('John team wins with' + scoreMike + 'points' );
      }  

    if(scoreJohn > scoreMike){
        console.log('John team win' + scoreJohn + 'points');
    }else if(scoreMike > scoreJohn){
        console.log('Mike team win' + scoreMike + 'points');
    }else{
        console.log()
    }

*/

/*Function


function calcuateAge(birthYear){
    return 2020 - birthYear;
}

var agebest = calcuateAge(1995);
var ageMike = calcuateAge(1981);
var ageJannie = calcuateAge(1990);


console.log(agebest,ageMike,ageJannie);


function yearretirement(year,firsName){
    var age = calcuateAge(year);
    var retirement = 65 - age;

    if(retirement > 0){
        console.log(firsName + ' retire in ' + retirement + ' years');
    }else{
        console.log(firsName + 'is already retired');
    }

   
}
yearretirement(1995,'Best');


*/


/*Function Statments and Expressions

var whatDoyoudo  =  function(job, firstName){
        switch(job){
            case 'teacher':
                return firstName + ' teacher kids how to code';
            case 'driver':
                return firstName + ' dirver a cab in Lisbon.'
            case 'designer':
                return firstName + ' designs beautiful websites';
            default:
                return firstName + ' does somthing else';
        }
}  

console.log(whatDoyoudo('teacher','best'));

*/




/*Array

var names = ['john','Mark','Jane'];
var years = new Array(1990,1969,1948);

console.log(names[0]);
console.log(names.length);


names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

var john =['john', 'Smith', 1990,'teacher',false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));


var isdesigner = john.indexOf('designer') === -1 ? 'john is NOT a designer'
: 'John Is a designer';
console.log(isdesigner);





function tipCalculator(bill){
    var percentage;
    if(bill < 50){
        percentage =.2; 
    }else if(bill >= 50 && bill < 200){
        percentage = .15;
    }else{
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124,48,268];
var tips = [tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[1])]

 var finalValues = [bills[0] + tips[0],
        bills[1] + tips[1],bills[2] + tips[2]]   

console.log(tips);


*/




/*Objects and properties

var john = {
    firstname: 'Best',
    lastname:'Leazt',
    brithyear:1995,
    family:['jane','Mark','Bob'],
    job:'Engineer',
    ismarried: false
};


console.log(john.firstname);
console.log(john['lastname']);
var x = 'brithyear';
console.log(john[x]);


john.job = 'designer';
john['ismarried'] = true;
console.log(john);

var jane = new Object();
jane.firstname = 'jane';
jane.brithyear = 1969;
jane['lastname'] = 'Smith';
console.log(jane);


*/



/*Object and methods

var john = {
    firstname: 'Best',
    lastname:'Leazt',
    brithyear:1995,
    family:['jane','Mark','Bob'],
    job:'Engineer',
    ismarried: false,
    calcAge: function(){
        this.age = 2020 - this.brithyear;
    } 
};

john.calcAge();
console.log(john); 

*/

/*

var john = {
    fullName: 'john snow',
    mass:70,
    height:1.70,
    calcBMI :function(){
        this.bmi  = this.mass / (this.height * this.height);
        return this.bmi ;
    }
}

var Mark = {
    fullName: 'Mark Alan',
    mass:90,
    height:1.95,
    calcBMI :function(){
        this.bmi  = this.mass / (this.height * this.height);
        return this.bmi ;
    }
}


if(john.calcBMI() > Mark.calcBMI()){
    console.log(john.fullName + 'has a higher BMI of' + john.bmi );
}else if(Mark.calcBMI() > john.calcBMI()) {
    console.log(Mark.fullName + 'has a higher BMI of' + Mark.bmi );
}else{
    console.log('they have the same BMI');
}
*/




/*Loop and  iteration


for (var i = 0; i < 10; i++){
    console.log(i);
}


var john =['john', 'Smith', 1990,'teacher',false];


for(var i = 0; i < john.length; i++){
    console.log(john[i]);
}

var i = 0;
while(i < john.length){
    console.log(john[i]);
    i++;
}




var john =['john', 'Smith', 1990,'teacher',false];

for(var i = 0; i < john.length; i++){

    if(typeof john[i] !== 'string') continue;
        console.log(john[i]);    
}

for(var i = 0; i < john.length; i++){

    if(typeof john[i] !== 'string') break;
        console.log(john[i]);    
}


for (var i = john.length - 1; i >= 0; i -- ){
    console.log(john[i]);
}


*/

var john = {
    fullname :'john smith',
    bills:[124,48,268,180,42],
    calcTips:function(){
        this.tips = [];
        this.finalValue =[];
        for( var i=0;i < this.bills.length; i++ ){               
            var percentage;
            var bills = this.bills[i]


                if(bills < 50){
                        percentage =.2;
                }else if(bills >= 50 && bills < 200 ){       
                        percentage =.15;
                }else{
                    percentage = .1;
                }

                this.tips[i] = bills * percentage;
                this.finalValue[i] = bills + bills * percentage;

        }
    }
}



var mark = {
    fullname :'mark raffalo',
    bills:[77,475,110,45],
    calcTips:function(){
        this.tips = [];
        this.finalValue =[];
        for( var i=0; i < this.bills.length; i++ ){               
            var percentage;
            var bills = this.bills[i]

                if(bills < 100){
                        percentage =.2;
                }else if(bills >= 100 && bills < 300 ){       
                        percentage =.1;
                }else{
                    percentage = .25;
                }

                this.tips[i] = bills * percentage;
                this.finalValue[i] = bills + bills * percentage;

        }
    }
}

function calcAverage(tips){
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }

    return sum / tips.length;

}

john.calcTips();
mark.calcTips();


john.average =  calcAverage(john.tips);
mark.average =  calcAverage(mark.tips);

console.log(mark,john);

if (john.average > mark.average){
    console.log(john.fullname + '\' s family pays higher tips with an average of $'  + john.average);
}else if(mark.average > john.average){
    console.log(mark.fullname + '\' s family pays higher tips with an average of $'  + mark.average);
}




