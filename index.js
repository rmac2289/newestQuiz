function startQuiz(){
  $('#start').on('click', function(event){
    renderQuestion();
  }
  );
}

function updateCounters(){
  $(".questionScore").html(`
    <ul>
       <img id="car" src="./firefighter.svg" alt="fire truck">
      <li id="js-answered">question: ${STORE.currentQuestion + 1}/${STORE.questions.length}</li>
      <img id="car" src="./car.svg" alt="police car">
      <li id="score">score: ${STORE.score}/${STORE.questions.length}</li>
      <img id="car" src="./ambulance.svg" alt="ambulance">
    </ul>`);
}

function resetCounter(){
  STORE.currentQuestion = 0;
  STORE.score = 0;
}

function renderQuestion(){
  let question = STORE.questions[STORE.currentQuestion];
  updateCounters();
  $("main").html(`
  <div role="region">
    <form class="question-form">
        <div class="fieldBox question">
          <div class="fieldText">
            <legend> <strong>${question.question}</strong></legend>
          </div>
        </div>
        <div class="options">
          <div class="buttonBox">
            <div class="qOptions"> </div>
        </div>
      </div>
      <div class="buttonBox">
        <div class="buttondiv">
          <button type = "submit" id="submit" tabindex="5">Submit</button>
          <button type = "button" id="next" tabindex="6">Next</button>
        </div>
      </div>
    </form>
  </div>`);
handleOptions();
$("#next").hide();
}

function handleOptions(){
  let question = STORE.questions[STORE.currentQuestion];
  for(i=0; i<question.options.length; i++)
  {
    $('.qOptions').append(`
        <input type = "radio" name="options" id="option${i+1}" value= "${question.options[i]}" tabindex ="${i+1}" required> 
        <label for="option${i+1}"> ${question.options[i]}</label><br>
        <span id="id${i+1}"></span><br>
    `);
  }
}

function handleQuestions(){
  $('body').on('click','#next', (event) => {
      if (STORE.currentQuestion === STORE.questions.length){
          displayResults();
      } else {
          renderQuestion();
      }
  });
}
function handleRightOrWrong(){
  $('body').on("submit",'.question-form', function(event) {
    event.preventDefault();
    let currentQ = STORE.questions[STORE.currentQuestion];
    let userChoice = $("input[name=options]:checked").val();
    let idNumber = currentQ.options.findIndex(i => i === userChoice);
    let id = "#id" + ++idNumber;
    $('span').removeClass("right wrong");
    if(userChoice === currentQ.answer) {
        STORE.score++; 
        $(`${id}`).append(`You got it, good work!<br/>`);
        $(`${id}`).addClass("right");
    }  else {
        $(`${id}`).append(`<img id="icon" src="./warning.svg">Incorrect! The answer is "${currentQ.answer}"<br/>`);
        $(`${id}`).addClass("wrong");
    }

    STORE.currentQuestion++;
    $(".score").text(`score: ${STORE.score}/${STORE.questions.length}`);
    $('#submit').remove();
    $('#next').show();
  });
}

function displayResults(){
  $("main").html(
    `<div role="region" class="results">
      <form id="restartQuiz">
          <section>
            <p>You made it through! Your score this time around is <strong>${STORE.score}</strong> out of a possible <strong>${STORE.questions.length}</strong>. Think you can do better? Click 'Try Again' and give it a go!</p>
          </section>
          <div>
            <button type="button" id="restart">Try Again</button>
          </div>
      </form>
    </div>`);
    resetCounter();
}

function restartQuiz(){
  $('main').on('click','#restart', function(event){
    renderQuestion();
  });
}

function handleQuizApp(){
  startQuiz();
  handleQuestions();
  handleRightOrWrong();
  restartQuiz();
}

$(handleQuizApp);