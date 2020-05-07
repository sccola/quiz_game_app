// Questions' Variables
let quizRulesDiv = document.querySelector('div.rules-div');
let questionDiv = document.querySelector('div.question-div');
let question = document.createElement('p');
let scoreDiv = document.querySelector('#score-div');
let startBtn = document.querySelector('button#btn-start');
let nextBtn = document.querySelector('button#btn-next');
let playAgainBtn = document.querySelector('#btn-restart');

// Answers' Variables
let optionsDiv = document.querySelector('div#options-div');
let optionsList = document.createElement('ul');
//const option = document.createElement('li');
let gameScoreDiv = document.querySelector('#score-div');
let gameScore = document.createElement('p');

// Load Set of New Questions
let gameQuestions = [];

// Initialize Questions counter
let quizIndex = 0;

// initialize Score counter
let score = 0;

// initialize status of question (check if user can move to next question)
let answeredQuestion = false;



