// Function Constructor

//var john = {
//    name: 'John',
//    yearOfBirth: 1999,
//    job: 'teacher'
//};

// you define a class actually as a function
// the args are the constructor
// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };
//
// // using the prototype property of the object
// // you can add functions and properties (I suppose)
// Person.prototype.calculateAge =
//     function() {
//           console.log(2019 - this.yearOfBirth);
// };
//
// Person.prototype.lastName = 'Smith';
//
// var john = new Person('John', 1990, 'teacher');
//
// var jane = new Person('Jane', 1993, 'porn star');
//
// var bill = new Person('Bill', 1979, 'judge');
//
// john.calculateAge();
// jane.calculateAge();
// bill.calculateAge();
//
// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(bill.lastName);

// Object.create
// var personProto = {
//   calculateAge: function() {
//     console.log(2019 - this.yearOfBirth);
//   }
// };
//
// var john = Object.create(personProto);
//
//
// function interviewQuestion(job) {
//   return function (name) {
//     if (job === 'designer'){
//          console.log(name + ', can you please explain what UX design is?');
//     } else if (job === 'teacher') {
//         console.log('What subject do you teach, ' + name + '?');
//     } else {
//         console.log('Hello ' + name + ', what do you do?');
//     };
//   };
// };
//
// interviewQuestion('teacher')('John');
// interviewQuestion('designer')('Boris');
// interviewQuestion('pornstar')('Brenda');
//
// /////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function() {
  // All your stuff goes in here!!
  function Question( question, answers, correct ){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  // Using the prototype of the 'Question' class
  // to add a behavior/function
  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function(answer, callback) {
    var sc;
    if (answer === this.correct) {
      console.log("Correct!");
      sc = callback(true);
    } else {
      console.log("Wrong answer. Try again! :)");
      sc = callback(false);
    }
    this.displayScore(sc);
  }

  Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('-----------------------------------');
  }

  var q1 = new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0);

  var q2 = new Question('What is he name of the course\'s teacher?', ['Boris', 'Edgar', 'ElDasha', 'Jonas'], 3);

  var q3 = new Question('Which answer best describes coding?', ['Boring', 'So So', 'Stimulating', 'Exciting'], 2);

  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function(correct){
      if (correct) {
        sc++
      }
      return sc;
    }
  }

  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt('Please enter the correct answers index.');

    // Note use of closure
    if (answer !== 'exit') {
        questions[n].checkAnswer(parseInt(answer), keepScore);
        nextQuestion();
    }
  }

  nextQuestion()

})();
