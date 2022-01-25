const questions = [
    {
        text: "Ko je osnivač kompanije <em>Apple</em>?",
        answers: {
            a: "Bil Gejts",
            b: "Ilon Maks",
            c: "Stiv Džobs"
        },
        correctAnswer: "c"
    },
    {
        text: "Kako se zvala prva programerka? Jedan progamski jezik nosi njeno ime.",
        answers: {
            a: "Ada Bajron",
            b: "Karmen Elektra",
            c: "Java Script"
        },
        correctAnswer: "a"
    },
    {
        text: "Kako se zove čuveni naučnik o kome govori film <em>The Immitation Game</em>? ",
        answers: {
            a: "Nikola Tesla",
            b: "Alen Tjuring",
            c: "Tomas Edison"
        },
        correctAnswer: "b"
    }
];

var quizWrapper = document.getElementById('quizWrapper');
var finishButton = document.getElementById('finishButton');
var timerWrapper = document.getElementById('timeLeft');
var startButton = document.getElementById('startButton');
var timeLeft = 10;

function startQuiz() {
    let quizQuestions = [];
    questions.forEach((question, questionIndex) => {
        quizQuestions.push(`<h3 class="mt-4">${question.text}</h3>`)
        console.log(question.answers)
        for (let answer in question.answers) {
            console.log(answer)
            let quizAnswers = `<div>
                                    <input type="radio" name="${questionIndex}" value="${answer}">   
                                    <label for="${answer}">${question.answers[answer]}</label>  
                                </div>`
            quizQuestions.push(quizAnswers)
        }
    });
    quizWrapper.innerHTML = quizQuestions.join('');
}

function reload() {
    reload = location.reload();
}

function finishQuiz() {
    let bodovi = 0;
    questions.forEach((question, questionIndex) => {
        let qName = questionIndex.toString();
        let pitanje = document.querySelector(`input[name="${qName}"]:checked`)?.value;
        if (pitanje == question.correctAnswer) bodovi++;
    })
    let qResults = document.getElementById('quizResults');
    let proc = (bodovi/questions.length*100).toFixed(2)
    qResults.innerHTML = ` <div class="alert alert-primary">
                                <h2>Results</h2>
                                <p>${bodovi}/${questions.length}</p>
                                <p>You got ${proc}% of questions right</p>
                                <button class="btn btn-primary" id="tryAgainButton">Try again</button>
                            </div>`
    let tryAgainButton = document.getElementById('tryAgainButton')
    tryAgainButton.addEventListener('click', reload, false)
}

startQuiz();
finishButton.addEventListener('click', (e) => {
    finishQuiz();
});

startButton.addEventListener('click', (e)=>{
    startButton.setAttribute('hidden', '')
    setTimeout(finishQuiz, 10000);
    setInterval(() => {
            if (timeLeft == 0) {
                timerWrapper.innerHTML = 'Time out!';
                return;
            }
            ;
            timeLeft--;
            timerWrapper.innerHTML = timeLeft;
        }
        , 1000)
});

// function startCount() {
//     setTimeout(finishQuiz, 10000);
//     setInterval(() => {
//             if (timeLeft == 0) {
//                 timerWrapper.innerHTML = 'Time out!';
//                 return;
//             }
//             ;
//             timeLeft--;
//             timerWrapper.innerHTML = timeLeft;
//         }
//         , 1000)
// }