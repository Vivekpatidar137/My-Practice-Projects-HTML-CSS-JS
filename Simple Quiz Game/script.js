const quizArray = [
    {
        question: 'Which among the following is related to Mesopotamian Civilization?',

        options: [
            'Iraq', ' Egypt', 'China', 'Greek'

        ],

        answer: 'Iraq'

    },

    {
        question: 'India House is located in?',

        options: [
            'UK', ' USA', 'India', 'Italy'

        ],

        answer: 'UK'
    },


    {
        question: 'Tata Institute of Fundamental Research is located in?',

        options: [
            'New Delhi', 'Mumbai', 'Indore', 'Lucknow'

        ],

        answer: 'Mumbai'
    },

    {
        question: 'Which among the following are known as shooting stars?',

        options: [
            'Meteors', 'Asteroids', 'Dwarf stars', 'Pulsar'

        ],

        answer: 'Meteors'
    },

    {
        question: 'In a Cricket World Cup match, who has scored the maximum runs in one inning?',

        options: [
            'Chris Gayle', 'Martin Guptill', 'Virat Kohli', 'AB de Villiers'

        ],

        answer: 'Martin Guptill'
    }

];


let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const quizQuestion = document.getElementById('question');
    const option = document.querySelectorAll('.option');

    quizQuestion.textContent = quizArray[currentQuestion].question;

    option.forEach((option, index) => {

        option.textContent = quizArray[currentQuestion].options[index];
        option.onclick = checkAnswer;
    })

}

function checkAnswer() {
    const selectedOption = this;
    const selectedText = this.textContent;
    const result = document.getElementById('result');

    if (selectedText === quizArray[currentQuestion].answer) {
         document.querySelectorAll('.option').forEach((option) => {
            selectedOption.classList.add('correct-option');
         });

        result.textContent = 'You are correct!';
        score++;


    } else {

        selectedOption.classList.add('incorrect-option');
        result.textContent = 'Sorry, it isn\'t correct.';

    }

    document.querySelectorAll('.option').forEach((option) => {
        option.onclick = null;
    });

    document.getElementById('nextButton').style.display = 'inline';
}

const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', () => {
    currentQuestion++;

    if(currentQuestion < quizArray.length){

        loadQuestion();
        nextButton.style.display = 'none';
        document.getElementById('result').textContent = '';

        document.querySelectorAll('.option').forEach((option) => {
            option.classList.remove('correct-option', 'incorrect-option');
        })


    } else {
        showResult();
    }
})

function showResult(){
    document.getElementById('quiz').innerHTML = `

    <h2>Quiz completed!</h2> 
    <p>Your score is: ${score} out of ${quizArray.length}
    `;
}

loadQuestion();