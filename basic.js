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

function highestArray() {
	array = [0,3,4,1,8];
	max = array[0];
	console.log(max + ", " + array[0])
	for(i = 1; i < array.length; i++) {
		if(array[i]>max) {
			max=array[i];
		}
		console.log(max + ", " + array[i])
	}
	console.log("The max is: " + max);
}

highestArray();