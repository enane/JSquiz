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

var quizWrapper = document.getElementById('quizWrapper')

function startQuiz() {
    let quizQuestions = [];
    questions.forEach((question, questionIndex) => {
        quizQuestions.push(`<h3 class="mt-4">${question.text}</h3>`)
        console.log(question.answers)
        for(let answer in question.answers){
            let quizAnswers = `<div>
                                    <input type="radio" name="${questionIndex}" value="${answer}">   
                                    <label for="${answer}">${question.answers[answer]}</label>  
                                </div>`
            quizQuestions.push(quizAnswers)
        }
    });
    quizWrapper.innerHTML = quizQuestions.join('');
}

startQuiz();

