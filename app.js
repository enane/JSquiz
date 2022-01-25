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

function finishQuiz() {
    let bodovi = 0;
    questions.forEach((question, questionIndex) => {
        let qName = questionIndex.toString();
        let pitanje = document.querySelector(`input[name="${qName}"]:checked`);
        console.log(pitanje)
        console.log(question.correctAnswer)
        if (pitanje.value == question.correctAnswer) bodovi++;
    })
    let qResults = document.getElementById('quizResults');
    let proc = (bodovi/questions.length*100).toFixed(2)
    qResults.innerHTML = ` <div class="alert alert-primary">
                                <h2>Results</h2>
                                <p>${bodovi}/${questions.length}</p>
                                <p>You got ${proc}% of questions right</p>
                            </div>`
}


startQuiz();
finishButton.addEventListener('click', (e) => {
    finishQuiz();
})
