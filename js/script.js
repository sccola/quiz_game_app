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

//Load Next Question and Answers
const nextQuestion = (quizIndex) => {
    // 1. Load Question
    question.innerText = gameQuestions[quizIndex].quiz; //console.log(question.innerText);
    questionDiv.appendChild(question);

    // 2. Load Answers
    //option.innerText = gameQuestions[quizIndex].options[quizIndex].option; //console.log(option.innerText);
    let quizOptions = gameQuestions[quizIndex].options;
    //console.log(quizOptions);

    let shuffleAnswers = (() => {
        quizOptions.sort(() => Math.random() - 0.5);
    })();

    for(item of quizOptions) {
        const option = document.createElement('li');
        option.innerText = item.option;  //console.log(item.option);
        // console.log(option);
            option.dataset.correct = item.correct;
            //console.log(option.dataset.correct);
        optionsList.appendChild(option);
    }
    optionsDiv.appendChild(optionsList);
    //console.log(optionsList);

    // Show answers when user clicked an option
    let answerOptions = document.querySelectorAll('li');
    let userOption, correctOption;

    for (answer of answerOptions) {
         //console.log(answer);
         if(answer.dataset.correct === 'true') {
            correctOption = answer;
            //console.log(correctOption)
            }

        answer.addEventListener('click', event => {
            //console.log(correctOption)
            userOption = event.target;
            //console.log (userOption.dataset.correct)
            if (userOption.dataset.correct === 'true') {
                userOption.classList.add('correct-answer')
                score++;
                updateScores(score);
            } else {
                userOption.classList.add('wrong-answer')
                correctOption.classList.add('correct-answer')
            }
            answeredQuestion = true;
            optionsList.classList.add('no-click');
        })
    }
}

//Update Scores
let updateScores = score => {
    gameScore.innerText = `YOUR CORRECT ANSWERS: ${score}`;
}


