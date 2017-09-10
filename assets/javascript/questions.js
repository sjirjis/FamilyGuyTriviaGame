$(document).ready(function() {
  $(function() {
    $("input").checkboxradio();
  });

  $('#questionContainer, #results, #done').hide();

  var questions = [{
    'q': "How many kids are in Peter and Lois's family?",
    'a': ['One', 'Two', 'Three', 'Four'],
    'answerIndex': 2
  }, {
    'q': "What is the name of the street the Griffin's live on?",
    'a': ['Avalon', 'Spooner', 'Main', 'Adams'],
    'answerIndex': 1
  }, {
    'q': "How old is Brian?",
    'a': ['Eleven', 'Eight', 'Nine', 'Seven'],
    'answerIndex': 1
  }, {
    'q': "What is Quagmire's full name?",
    'a': ['Just Quagmire, like Cher', 'Glen Quagmire', 'Dan Quagmire', 'Ned Quagmire'],
    'answerIndex': 1
  }, {
    'q': "What is the bartenders name at the pub that Peter goes to?",
    'a': ['George', 'Vince', 'Horace', 'James'],
    'answerIndex': 1
  }, {
    'q': "What is the mascot for Quahog?",
    'a': ['Clam', 'Eagle', 'Horse', 'Lion'],
    'answerIndex': 0
  }, {
    'q': "What is the name of the fish that Peter, Joe, Quagmire and Cleveland go hunting for?",
    'a': ['Snapperjaw', 'Spinetooth', 'Daggermouth', 'Bloodtooth'],
    'answerIndex': 2
  }, {
    'q': "What is the name of the pub that Peter makes in his basement?",
    'a': ['The Drunken Clam', 'The Beer Baron', "Peter's Pub", 'Ye Old Pube'],
    'answerIndex': 3
  }, {
    'q': "Why does Peter have to replace Death?",
    'a': ['Death wanted a vacation', 'Death was too old, so he retired', 'Death broke his ankle', 'Death got fired'],
    'answerIndex': 2
  }, {
    'q': "What lives in Chris' closet?",
    'a': ['An evil monkey', 'A bat', 'The bogey man', 'A gnome that steals things from him'],
    'answerIndex': 0
  }, {
    'q': 'What name did "Kiss" give Lois?',
    'a': ['Loopey Lois', 'Loose Lois', 'Lame Lois', 'Lankey Lois'],
    'answerIndex': 1
  }];

  var totalQuestionIndex = questions.length;
  var currentQuestionIndex = 0;

  var displayQandA = function() {
    $('#questionText').html(questions[currentQuestionIndex].q);
    $('#radioLabel-1').html(questions[currentQuestionIndex].a[0]);
    $('#radioLabel-2').html(questions[currentQuestionIndex].a[1]);
    $('#radioLabel-3').html(questions[currentQuestionIndex].a[2]);
    $('#radioLabel-4').html(questions[currentQuestionIndex].a[3]);
  };

  $('#next, #start').on('click', function() {
    displayQandA();
    currentQuestionIndex++;
    if(currentQuestionIndex == totalQuestionIndex) {
      $('#next').hide();
      $('#done, #results').show();
    }
  });
});
