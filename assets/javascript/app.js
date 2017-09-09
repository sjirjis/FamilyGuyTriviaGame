$('#test').on('click', function(){
  console.log('test executed');
});

$('#start').on('click', function() {
  console.log('button clicked!');
    //var t = new timer("timer", 10);
    //t.start();
    timer("timer", 30).start();
    qRender();
    $('#start').hide();
});

var timer = function(ID, count) {
    var self = {};
    self.tCount = count;
    self.counter;
    self.domID = ID;
    self.start = function() {
        self.renderTimer();
        self.counter = setInterval(self.ticker, 1000 * 1);
    };
    self.ticker = function() {
        self.tCount = self.tCount - 1;
        self.renderTimer();
        if (self.tCount <= 0) {
            clearInterval(self.counter);
            $('#quiz').hide();
            qScore();
            return;
        }
    };
    self.renderTimer = function() {
        document.getElementById(self.domID).innerHTML = self.tCount + " seconds";
    };
    return self;
}

var qRender = function() {
    for (i = 1; i <= questions.length; i++) {

        var q = questions[i - 1].q;
        /* beautify preserve:start */
        var qaTemplate = '<br /><div id="' + q + '"><h3>' + q +'</h3>'
        + '<input type="radio" value="a1" name="q' + i + 'a" />' + questions[i - 1].a[0]
        + '<input type="radio" value="a2" name="q' + i + 'a" />' + questions[i - 1].a[1]
        + '<input type="radio" value="a3" name="q' + i + 'a" />' + questions[i - 1].a[2]
        + '<input type="radio" value="a4" name="q' + i + 'a" />' + questions[i - 1].a[3]
        + '</div><br />';
		/* beautify preserve:end */
        $('.questions').append(qaTemplate);
    };
};

$('#score').on('click', function() {
    qScore();
});

var qScore = function() {
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    for (i = 0; i < questions.length; i++) {
        var q = questions[i];
        var a = $('[name="q' + (i + 1) + 'a"]:checked').val();
        if (q.aid === a) {
            correct = correct + 1
        } else if (typeof a === 'undefined') {
            unanswered = unanswered + 1
        } else {
            incorrect = incorrect + 1
        }
    }

    $('#results').append('<h3 id="done">All Done!</h3>'
    	+ '<div id="scoreBox">'
	    	+ '<div id="correct" />Correct Answers: ' + correct
	    	+ '<br /><div id="incorrect" />Incorrect Answers: ' + incorrect
	    	+ '<br /><div id="Unanswered" />Unanswered: ' + unanswered
	    + '</div>'
    );

};

var questions = [{
    'q': "How many kids are in Peter and Lois's family?",
    'a': ['One', 'Two', 'Three', 'Four'],
    'aid': 'a3'
}, {
    'q': "What is the name of the street the Griffin's live on?",
    'a': ['Avalon', 'Spooner', 'Main', 'Adams'],
    'aid': 'a2'
}, {
    'q': "How old is Brian?",
    'a': ['Eleven', 'Eight', 'Nine', 'Seven'],
    'aid': 'a2'
}, {
    'q': "What is Quagmire's full name?",
    'a': ['Just Quagmire, like Cher', 'Glen Quagmire', 'Dan Quagmire', 'Ned Quagmire'],
    'aid': 'a2'
}, {
    'q': "What is the bartenders name at the pub that Peter goes to?",
    'a': ['George', 'Vince', 'Horace', 'James'],
    'aid': 'a2'
}, {
    'q': "What is the mascot for Quahog?",
    'a': ['Clam', 'Eagle', 'Horse', 'Lion'],
    'aid': 'a1'
}, {
    'q': "What is the name of the fish that Peter, Joe, Quagmire and Cleveland go hunting for?",
    'a': ['Snapperjaw', 'Spinetooth', 'Daggermouth', 'Bloodtooth'],
    'aid': 'a3'
}, {
    'q': "What is the name of the pub that Peter makes in his basement?",
    'a': ['The Drunken Clam', 'The Beer Baron', "Peter's Pub", 'Ye Old Pube'],
    'aid': 'a4'
}, {
    'q': "Why does Peter have to replace Death?",
    'a': ['Death wanted a vacation', 'Death was too old, so he retired', 'Death broke his ankle', 'Death got fired'],
    'aid': 'a3'
}, {
    'q': "What lives in Chris' closet?",
    'a': ['An evil monkey', 'A bat', 'The bogey man', 'A gnome that steals things from him'],
    'aid': 'a1'
}, {
    'q': 'What name did "Kiss" give Lois?',
    'a': ['Loopey Lois', 'Loose Lois', 'Lame Lois', 'Lankey Lois'],
    'aid': 'a2'
}];
