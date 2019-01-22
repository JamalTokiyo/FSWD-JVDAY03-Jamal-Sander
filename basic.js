//Basic Ex1
function weatherAdvice() {
	temp = Math.floor(((Math.random()*30)-5));
	console.log("It is " + temp + "c outstide");
	if(temp<=10) {
		console.log("The weather is cold")
	} else {
		console.log("The weather is moderate")
	}
}

weatherAdvice();