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

// Start New Game
const newGame = () => {

    // 1. Shuffle Quiz Bank before loading new set of Qustions
    shuffleQuestions();

    // 2. Load Set of Questions for New Game
    newQuestions();
        //console.log(gameQuestions)

    // 3. Load Next Question and Answers
    nextQuestion(quizIndex);

    // 4. Initialize Game Score
    gameScore.innerText = `YOUR CORRECT ANSWERS: ${score}`;
    gameScoreDiv.appendChild(gameScore);
}

//reset display area for Answer Options
let refreshDisplay = () => {
    //nextBtn.classList.add('no-click');
    answeredQuestion = false;
    while(optionsList.firstChild) {
        //console.log(optionsDiv.firstChild)
        optionsList.removeChild(optionsList.firstChild);
    }
}

//Start a New Game
startBtn.addEventListener('click', () => {
    //console.log('you clicked start Game')
    //console.log(quizIndex)
    newGame();
    startBtn.classList.add('hide');
    quizRulesDiv.classList.add('hide');
    scoreDiv.classList.remove('hide');
    nextBtn.classList.remove('hide');
    quizIndex++;
});

// Pull a Set of 5 Questions from Question Bank
const newQuestions = () => {
    if(gameQuestions.length === 0){
        for(let i=0; i<5; i++) {
            gameQuestions.push(questionBank[i])
        }
        //console.log(gameQuestions)
        return gameQuestions;
    }
}



