$(document).ready(function() {
  var questions = [{
    'q': "How many kids are in Peter and Lois's family?",
    'a': ['One', 'Two', 'Three', 'Four'],
    'answer': 3
  }, {
    'q': "What is the name of the street the Griffin's live on?",
    'a': ['Avalon', 'Spooner', 'Main', 'Adams'],
    'answer': 2
  }, {
    'q': "How old is Brian?",
    'a': ['Eleven', 'Eight', 'Nine', 'Seven'],
    'answer': 2
  }, {
    'q': "What is Quagmire's full name?",
    'a': ['Just Quagmire, like Cher', 'Glen Quagmire', 'Dan Quagmire', 'Ned Quagmire'],
    'answer': 2
  }, {
    'q': "What is the bartenders name at the pub that Peter goes to?",
    'a': ['George', 'Vince', 'Horace', 'James'],
    'answer': 3
  }, {
    'q': "What is the mascot for Quahog?",
    'a': ['Clam', 'Eagle', 'Horse', 'Lion'],
    'answer': 1
  }, {
    'q': "What is the name of the fish that Peter and the guys hunt for?",
    'a': ['Snapperjaw', 'Spinetooth', 'Daggermouth', 'Bloodtooth'],
    'answer': 3
  }, {
    'q': "What is the name of the pub that Peter makes in his basement?",
    'a': ['The Drunken Clam', 'The Beer Baron', "Peter's Pub", 'Ye Old Pube'],
    'answer': 4
  }, {
    'q': "Why does Peter have to replace Death?",
    'a': ['Death wanted a vacation', 'Death was too old, so he retired', 'Death broke his ankle', 'Death got fired'],
    'answer': 3
  }, {
    'q': "What lives in Chris' closet?",
    'a': ['An evil monkey', 'A bat', 'The bogey man', 'A gnome that steals things from him'],
    'answer': 1
  }, {
    'q': 'What name did "Kiss" give Lois?',
    'a': ['Loopey Lois', 'Loose Lois', 'Lame Lois', 'Lankey Lois'],
    'answer': 2
  }];

  var totalQuestions = questions.length - 1; //to follow index of questions arr
  var currentQuestion = 0;
  var score = 0;
  var radioIdSelected;

  var displayQandA = function() {
    //start with unselected buttons
    $('input[name=radio-answer]').prop('checked',false);
    $('label').removeClass('ui-checkboxradio-checked ui-state-active');

    //display the new q & a's
    $('#questionText').html(questions[currentQuestion].q);
    $('#radioLabel-1').html(questions[currentQuestion].a[0]);
    $('#radioLabel-2').html(questions[currentQuestion].a[1]);
    $('#radioLabel-3').html(questions[currentQuestion].a[2]);
    $('#radioLabel-4').html(questions[currentQuestion].a[3]);
  };

  var validateAndProcessAnswer = function() {
    try {
      //grab the #id of selected radio, split into arrayat the "-", and pop() to return the last elemtent in array
      //looking for 0, 1, 2, or 3 to evaluate against the correct answer index
      radioIdSelected = $('input[name=radio-answer]:checked').attr('id').split("-").pop();
    }
    catch(err) {
      $("#myModal").modal();
      return;
    }
    if (radioIdSelected == questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
  }

  $('#questionContainer, #results, #submit').hide();
  $("input").checkboxradio();

  $('#start').on('click', function() {
    displayQandA();
  });

  $('#next').on('click', function() {
    validateAndProcessAnswer(); //validate answer...
    displayQandA(); //..if passed, throw the next question
    if(currentQuestion == totalQuestions) {
      $('#next').hide();
      $('#submit').show();
    }
  });

  $('#submit').on('click', function() {
    validateAndProcessAnswer();  //making sure to count the score of the last question
    $('#questionContainer, #submit').hide();
    $('#results').html('<h3>You got ' + score + ' questions correct out of ' + questions.length + '!').show();
  });
});
