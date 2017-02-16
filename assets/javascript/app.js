$('#start').on('click',function(){
	$('#start').css("display", "none")

	//timer();
	setInterval();
});

// var count=30;
// var counter=setInterval(timer, 1000 * 1);

// function timer()
// {
//   count=count-1;
//   if (count <= 0)
//   {
//      clearInterval(counter);
//      //counter ended, do something here
//      return;
//   }

//   //$('.timer').html('Time Remaining: ' + count + ' seconds');
//   document.getElementById("timer").innerHTML=count + " seconds";
// }

var timeleft = 30;
var downloadTimer = setInterval(function(){
  document.getElementById("timer").value = 10 - --timeleft;
  if(timeleft <= 0)
    clearInterval(downloadTimer);
},1000);