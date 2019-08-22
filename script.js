// Function Constructor

//var john = {
//    name: 'John',
//    yearOfBirth: 1999,
//    job: 'teacher'
//};

// you define a class actually as a function
// the args are the constructor
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

// using the prototype property of the object 
// you can add functions and properties (I suppose)
Person.prototype.calculateAge = 
    function() {
          console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jane', 1993, 'porn star');

var bill = new Person('Bill', 1979, 'judge');

john.calculateAge();
jane.calculateAge();
bill.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(bill.lastName);


