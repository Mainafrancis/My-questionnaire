var questionBank= [
    {
        question : 'Which of the following is not a block element?',
        option : ['div','aside','span','article'],
        answer :  'span'
    },
    {
        question : 'Which of the folllowing is not a primitive data type?',
        option : ['string','boolean','numbers','object'],
        answer : 'object'
    },
    {
        question : 'Which programming language is used in formatting a web page?',
        option : ['HTML','CSS','JS','Python'],
        answer : 'HTML'
    },
    {
        question : 'Which HTML attribute is used to portray image sources?',
        option : ['Href attribute','Alt attribute','Src attribute','Style attribute'],
        answer : 'Src attribute'
    },
    {
        question : 'Which HTML attributes acts as a link tag?',
        option : ['Alt attribute','Src attribute','Style attribute','Href attribute'],
        answer : 'Href attribute'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}
  function calcScore(e){
       if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
       {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
       }
       else{
        document.getElementById(e.id).style.background= 'tomato';
       }
       setTimeout(nextQuestion,300);
  }
  function nextQuestion(){
        if(i<questionBank.length-1)
         {
            i=i+1;
            displayQuestion();
         }
         else{
             points.innerHTML= score+'/'+questionBank.length;
             quizContainer.style.display= 'none';
             scoreboard.style.display='block'
         }
  }
  next.addEventListener('click',nextQuestion);

  function backToQuiz(){
      location.reload()
  }
    function checkAnswer(){
      var answeRBank= document.getElementById('answerBank');
      var answers= document.getElementById('answers');
      answeRBank.style.display= 'block';
      scoreboard.style.display= 'none';
      for(var a=0;a<questionBank.length;a++)
      {
          var list=document.createElement('li');
          list.innerHTML=questionBank[a].answer;
          answers.appendChild(list);
      }
        
      

    }




displayQuestion();