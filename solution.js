/* when a user clicks on start quiz button */
function startQuiz() {
  $('#start').on('click', function(event){
    renderQuestion();
  }
  );
}

/* Displays question number and score obtained */
function updateQuestionAndScore() {
  const html = $(`<ul>
       <img id="car" src="./firefighter.svg" alt="fire truck">
      <li id="js-answered">question: ${STORE.currentQuestion + 1}/${STORE.questions.length}</li>
      <img id="car" src="./car.svg" alt="police car">
      <li id="js-score">score: ${STORE.score}/${STORE.questions.length}</li>
      <img id="car" src="./ambulance.svg" alt="ambulance">
    </ul>`);
  $(".question-and-score").html(html);
}

/* Displays the options for the current question */
function updateOptions()
{
  let question = STORE.questions[STORE.currentQuestion];
  for(i=0; i<question.options.length; i++)
  {
    $('.js-options').append(`
        <input type = "radio" name="options" id="option${i+1}" value= "${question.options[i]}" tabindex ="${i+1}" required "> 
        <label for="option${i+1}"> ${question.options[i]}</label> <br>
        <span id="js-r${i+1}"></span><br>
    `);
  }
  
}

/*displays the question*/
function renderQuestion() {
  let question = STORE.questions[STORE.currentQuestion];
  updateQuestionAndScore();
  const questionHtml = $(`
  <div>
    <form id="js-questions" class="question-form">
      
      <fieldset>
        <div class="fieldBox question">
          <div class="fieldText">
            <legend> ${question.question}</legend>
          </div>
        </div>

        <div class="row options">
          <div class="buttonBox">
            <div class="js-options"> </div>
        </div>
      </div>
      <div class="buttonBox">
        <div class="buttondiv">
          <button type = "submit" id="answer" tabindex="5">Submit</button>
          <button type = "button" id="next-question" tabindex="6"> Next </button>
        </div>
      </div>
    </fieldset>
    </form>
  </div>`);
$("main").html(questionHtml);
updateOptions();
$("#next-question").hide();
}

/* displays results and restart quiz button */
function displayResults() {
  let resultHtml = $(
    `<div class="results">
      <form id="js-restart-quiz">
        <fieldset>
          <div class="row">
            <div class="col-12">
              <legend>Your Score is: ${STORE.score}/${STORE.questions.length}</legend>
            </div>
          </div>
        
          <div class="row">
            <div class="col-12">
              <button type="button" id="restart"> Restart Quiz </button>
            </div>
          </div>
        </fieldset>
    </form>
    </div>`);
    STORE.currentQuestion = 0;
    STORE.score = 0;
  $("main").html(resultHtml);
}

/* checks whether it reached the end of questions list */
function handleQuestions() {
  $('body').on('click','#next-question', (event) => {
    STORE.currentQuestion === STORE.questions.length?displayResults() : renderQuestion();
  });
}


/*checks whether the chosen option is right or wrong and displays respective message*/ 
function handleSelectOption() {
  $('body').on("submit",'#js-questions', function(event) {
    event.preventDefault();
    let currentQues = STORE.questions[STORE.currentQuestion];
    let selectedOption = $("input[name=options]:checked").val();
    let id_num = currentQues.options.findIndex(i => i === selectedOption);
    let id = "#js-r" + ++id_num;
    $('span').removeClass("right-answer wrong-answer");
    if(selectedOption === currentQues.answer) {
      STORE.score++; 
    $(`${id}`).append(`You got it, good work!<br/>`);
      $(`${id}`).addClass("right-answer");
    }
    else {
      $(`${id}`).append(`<img id="icon" src="./warning.svg">Incorrect! The answer is "${currentQues.answer}"<br/>`);
      $(`${id}`).addClass("wrong-answer");
    }

    STORE.currentQuestion++;
    $("#js-score").text(`Score: ${STORE.score}/${STORE.questions.length}`);
    $('#answer').hide();
    $("input[type=radio]").attr('disabled', true);
    $('#next-question').show();
  });
}

function restartQuiz() {
  $('body').on('click','#restart', (event) => {
    renderQuestion();
  });
}

function handleQuizApp() {
  startQuiz();
  handleQuestions();
  handleSelectOption();
  restartQuiz();
}

$(handleQuizApp);