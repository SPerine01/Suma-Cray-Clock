// Set the date and time 
$(document).ready(function(){
	setInterval(function(){
		var clockTime = new Date();

$(".hours").text(clockTime.getHours());
$(".mins").text(clockTime.getMinutes());
$(".secs").text(clockTime.getSeconds());

	var myHours = clockTime.getHours();
	var myMins = clockTime.getMinutes();
	//declaring & pupulating and array
	var colors = ["crimson", "gold", "cyan", "lightgreen", "beige"];
	//getting random color from colors[array]
	var x = Math.floor(Math.random()*colors.length);

// displaying the colors in the console, check if code is running
	
	
	// set function to var x to change colors array
	if(myHours %60 === 0){
		$("body").css("background-color",  colors[x]);

// if 5 is divisible by 0, 
	} else if (myMins %5 === 0){
		$("body").css("background-color",  colors[x]);

	} else if (myMins %2 === 0) {
		// alert(clockTime + colors[x]);
	
		$("body").css("background-color",  colors[x]);
	}

	// if (colors[2]){
	// 	alert("Yaayyyyyy!");
	// }

});

	
});
