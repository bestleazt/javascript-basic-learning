//Function constructor 
/*
var john = {
    name:'John',
    yearOfBirth:1990,
    job:'teacher'
};

var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        console.log(2020 - this.yearOfBirth);
    }
}

Person.prototype.calculateAge = 
function(){
    console.log(2020-this.yearOfBirth);
}

Person.prototype.lastname = 'Smith';

var john = new Person('John',1995,'teaher');
var jane = new Person('jane',1969,'designer');
var mark = new Person('Mark',1948,'retired');


john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastname);
console.log(jane.lastname);
console.log(mark.lastname);



//Object.create

    var personProto = {
        calculateAge: function(){
            console.log(2020 - this.yearOfBirth);
        }
    }

    var john = Object.create(personProto);
    john.name = 'John';
    john.yearOfBirth = 1990;
    john.job = 'teacher';

    var jane = Object.create(personProto,{
        name:{value : 'Jane'},
        yearOfBirth:{value:1889},
        job:{value:'designer'}
    });

    



    //Primitives vs objects

    var a = 23;
    var b = a;
    a = 45;
    console.log(a);
    console.log(b);



    var obj1 = {
        name: 'john',
        age: 26
    };

    var obj2 = obj1
    obj1.age = 30;
    console.log(obj1.age);
    console.log(obj2.age);


    var age = 27;
    var obj = {
        name:'Jonas',
        city:'Lisbon'
    };

    function change(a, b){
        a = 30;
        b.city = 'San Francisco';
    }

    change(age, obj);

    console.log(age);
    console.log(obj.city);

*/


//Passing functions as arguments
/***


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++ ){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020 - el; 
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate (el) {
        if(el >= 18 && el <= 81){
            return Math.round(206.9 - (0.67 * el));
        }else {
            return -1;
        }
    }


var ages = arrayCalc(years,calculateAge);
var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages,maxHeartRate);

console.log(ages);
console.log(rates);





////Function returning functions

    function interviewQuestion(job){
        if(job === 'designer'){
            return function(name){
                console.log(name + 'can you please explain what UX design is?')
            }
        }else if(job === 'teacher'){
            return function(name){
                console.log('What subject do you teach, ' + name + '?');
            }
        }else{
            return function(name){
                console.log('Hello ' + name + ' ,what do you do?');
            }
        }
    }

    var teacherQuestion = interviewQuestion('teacher');
    var designerQuestion = interviewQuestion('designer');

    teacherQuestion('John');
    designerQuestion('mark');

    interviewQuestion('teacher')('Mark');


   


   //IIFE


   function game() {
       var score = Math.random() * 10;
       console.log(score >= 5);
   }
    game();




    (function(){
            var score = Math.random() * 10;
            console.log(score >= 5);
    })();

    //console.log(score);

    (function(goodluck){
        var score = Math.random() * 10;
        console.log(score >= 5 - goodluck);
    })();



// Closures


function retirement(retirementAge){
    var a = 'years left until retirement.';
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) +a);
    }   
}


retirementUS(1990);
var retirementGeramany = retirement(65);
var retirementIceland = retirement(67);
var retirementUS = retirement(66);



retirementGeramany(1995);
retirementIceland(1995);
retirementUS(1995);


//retirement(66)(1990);

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + 'can you please explain what UX design is?')
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }else{
        return function(name){
            console.log('Hello ' + name + ' ,what do you do?');
        }
    }
}





// Bind, call and apply

var john = {
    name :'John',
    age:25,
    job: 'teacher',
    presentation: function(style,timeOfDay){
        if(style === 'formal'){
            console.log('Good' + timeOfDay + 
            ', Ladies and gentleman! I\'m ' + this.name + ',I\'m a ' + 
            this.job + ' and I\'m ' + this.age + ' years old');
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? I\'m' + this.name +
            ', I\m a ' + this.job + 'and I\'m' + this.age + 'years old. Have a nice' + timeOfDay + '.');

        }
    }
}

var emily = {
    name:'Emily',
    age:35,
    job:'designer'
};


john.presentation('formal','morning');

john.presentation.call(emily,'friendly','afternoon');

var johnFriendly = john.presentation.bind(john,'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('afternoon');

*/


(function() {

    function Question(question,answers,correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
    
            for(var i = 0; i < this.answers.length; i++){
                console.log(i + ': ' + this.answers[i]);
            }
    }
    
    Question.prototype.checkAnswer = 
    function(ans,callback){
        var sc;
        if(ans === this.correct){
            console.log('Correct answer!');
            sc = callback(true);
        }  else {
            console.log('Wrong answer');
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    

    Question.prototype.displayScore = function(score){
        console.log('Your currect is:' + score);
    }
    
    var q1 = new Question('Is Javascript the coolest programming language in the world?',
             ['Yes','No'],0);
    
    
    var q2 = new Question('What is the name of this course\'s teacher?',
        ['John','Micheal','Jonas'],2);
        
    var q3 = new Question('What does best describe coding?',
        ['Boring','Hard','Fun','Tediuos'],2);    
   
   
   
        var questions = [q1,q2,q3];
    
        function score(){
            var sc = 0;
            return function(correct){
                if(correct){
                    sc++;
                }
                return sc;
            }
        }
        
        var keepScore = score();

        function nextQuestion(){
            
            var n = Math.floor(Math.random() * questions.length);
        
            questions[n].displayQuestion();
        
           var answer = prompt('Please select the correct answer!.');
        
           //questions[n].checkAnswer(answer);
            
            if(answer !== 'exit'){

                questions[n].checkAnswer(parseInt(answer),keepScore);

                nextQuestion();
            }
        
        }

        nextQuestion();
        
})();





