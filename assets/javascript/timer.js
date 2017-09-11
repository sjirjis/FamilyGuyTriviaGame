$('#timer').hide();

$('#start').on('click', function() {
  $('#start').hide();
  $('#timer').show();
  $('#questionContainer').show();

  var quizDuration = 3
  $('#timerText').html(quizDuration);

  var quizExpire = new Date();
  quizExpire.setSeconds(quizExpire.getSeconds() + quizDuration);

  var timer = setInterval(function() {
    var now = new Date();
    var timeLeft = Math.ceil((quizExpire - now) / 1000);

    $('#timerText').html(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timer);
      $('#timerText').css({
        'background-color': '#C0392B',
        'color': '#fff'
      });
      $('#timerText').html("Time's Up!");
      $('#questionContainer, #submit').hide();
      $('#results').html('<h3>You got ' + score + ' questions correct out of ' + questions.length + '!').show();
      //@todo have to get score to actually dispay. currently based on validateAndProcessAnswer() in questions.js

    }
  }, 1000);
});
