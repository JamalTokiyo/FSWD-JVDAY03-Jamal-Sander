//Basic Ex1
function weatherAdvice() {
	temp = Math.floor(((Math.random()*30)-5));
	document.write("It is " + temp + "c outstide. ");
	if(temp<=10) {
		document.write("The weather is cold")
	} else {
		document.write("The weather is moderate");
	}
}

weatherAdvice();

//Basic Ex2
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

//Basic Ex2
function highestmax(){
	
	var array=[-3,1,7,9];
	max=array[0];
	for(i=0;i<array.length;i++)
	{
		if(array[i]>max){
			max=array[i];
		}
}

		document.write("<br> max the number is "+ max);
}
highestmax();

//Basic Ex3
function productArray() {
	array = [2,3,4,1,8];
	product = array[0];
	for(i = 1; i < array.length; i++) {
		product = product * array[i];
	}
	console.log("The product is: " + product)
}

productArray();