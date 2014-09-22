
$(document).ready(function(){
/*--- Random Number ---*/
	var random_number = Math.floor((Math.random() * 100) + 1);
	console.log(random_number);
	var num_guess = 0;

	/*-- New Game--*/
	$('.new').click(function(){
		window.location.reload();
	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*---Make Guess ---*/
  	$("#guessButton").click(function(e) {
		e.preventDefault(e);
		var user_guess = $("#userGuess").val();
		console.log(typeof user_guess);
		var user_guess_val = parseInt(user_guess);
		console.log(typeof user_guess_val);
		if (user_guess != "" && typeof user_guess_val == "number" && (user_guess_val > 0) && (user_guess_val <= 100)) {
			num_guess++;
			hotOrCold(user_guess);
			$("#count").html(num_guess);
			$("#guessList").append("<li>" + user_guess + "</li>");
		}
		else
		{
			alert("Please enter an integer between 1 and 100");
		}
	});

	var hotOrCold = function(x) {
		//type of x is currently a string, need to convert it into an integer
		x = parseInt(x);
		var abs_diff = Math.abs(x - random_number);
		if (abs_diff == 0) {
			$("#feedback").html("Correct!");
			$("#guessButton").hide();
			$("#guessButton").attr('disabled', 'disabled');
		}
		else if (abs_diff > 50) {
			$("#feedback").html("Super Cold!");
			$("#userGuess").val("");
		}
		else if (abs_diff > 15) {
			$("#feedback").html("Cold!");
			$("#userGuess").val("");
		}
		else if (abs_diff > 5) {
			$("#feedback").html("Warm!");
			$("#userGuess").val("");
		}
		else
		{
			$("#feedback").html("Very Warm");
			$("#userGuess").val("");
		}

	};


});


