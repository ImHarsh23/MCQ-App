const questions=[
    {
        question:"Who is the largest animal in the world?",
        answer:[
            {text: "Shark", correct:false},
            {text: "Blue whale", correct:true},
            {text: "Elephant", correct:false},
            {text: "Giraffe", correct:false}
        ]
    },

    {
        question:"Largest river in india?",
        answer:[
            {text: "Godavari", correct:false},
            {text: "Ganga", correct:false},
            {text: "Brahmputra", correct:true},
            {text: "Narmada", correct:false}
        ]  
    },

    {
        question:"Twinkling of star is caused by?",
        answer:[
            {text: "Reflection", correct:false},
            {text: "Total internal reflection", correct:false},
            {text: "Refraction", correct:true},
            {text: "Distance", correct:false}
        ]  
    },
    
    {
        question:"Array indexing start with?",
        answer:[
            {text: "0", correct:true},
            {text: "1", correct:false}, 
            {text: "-1", correct:false},
            {text: "Array don't have index", correct:false}
        ]  
    }
];

const questionElement= document.querySelector('.question');
const nextButton= document.querySelector('.nextBtn');
const optionButton= document.querySelector('.option');
const eventclick= document.querySelector('.optionbtn');
const nextButtondiv= document.querySelector('.next');
let questionIndex=0;
let score=0;

function startquiz(){
    if(questionIndex<questions.length){
        nextButton.innerHTML="Next";
        showQuestion();
    }
    else{
        questionElement.innerHTML=`Your Score is ${score}`;
        nextButton.innerHTML="Retake Test";
        nextButtondiv.style.display="block";
    }
    
}

function showQuestion(){
    let questionText=questions[questionIndex];
    let questionNumber=questionIndex+1;
    let count=0;
    questionElement.textContent=questionNumber+". "+questionText.question;

    questionText.answer.forEach(function(ans){
        let optionbtn=document.createElement('button');
        optionbtn.textContent=ans.text;
        if(questionText.answer[count++].correct==true){
            optionbtn.dataset.correct=true;
        }
        else{
            optionbtn.dataset.correct=false;
        }
        optionbtn.classList.add('optionbtn');
        optionButton.appendChild(optionbtn);
        optionbtn.addEventListener('click',selectedAnswer);
    });
}

function selectedAnswer(event){
    if(event.target.dataset.correct=="true"){
        event.target.classList.add("correct");
        score++;
    }
    else{
        event.target.classList.add("incorrect");
    }
    for(let i=0;i<optionButton.children.length;i++){
        if(optionButton.children[i].dataset.correct=="true"){
            optionButton.children[i].classList.add("correct");
            break;
        }
    }
    nextButtondiv.style.display="block";

    for(let i=0;i<optionButton.children.length;i++){
        optionButton.children[i].removeEventListener('click',selectedAnswer);
    }
}
nextButton.addEventListener('click',function(){
    if(questionIndex==questions.length){
        nextButtondiv.style.display="none";
        score=0;
        questionIndex=0;
        startquiz();
    }
    else{
        questionIndex++;
        optionButton.innerHTML="";
        nextButtondiv.style.display="none";
        startquiz();
    }
});
startquiz();