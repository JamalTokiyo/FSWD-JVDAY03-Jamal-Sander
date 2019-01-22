//Basic Ex1
function weatherAdvice() {
	temp = Math.floor(((Math.random()*30)-5));
	document.write("<br> It is " + temp + "c outstide. ");
	if(temp<=10) {
		document.write("The weather is cold")
	} else {
		document.write("The weather is moderate");
	}
}

document.write("<br><br> Basic Exercise 1")
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

console.log("")
console.log("Basic Exercise 2")
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

document.write("<br><br> Basic Exercise 2")
highestmax();

//Basic Ex3
function productArray() {
	array = [1,3,7,10,2];
	product = array[0];
	for(i = 1; i < array.length; i++) {
		product = product * array[i];
	}
	console.log("The product is: " + product)
}

console.log("")
console.log("Basic Exercise 3")
productArray();

function weatherAdvicev2() {
	temp = Math.floor(((Math.random()*50)-5));
	document.write("<br> It is " + temp + "c outstide. ");
	if(temp<=10) {
		document.write("The weather is cold");
		document.getElementById("weatherIcon").src="img/cold.png";
	} 
	else if(temp>=32) {
		document.write("The weather is hot");
		document.getElementById("weatherIcon").src="img/hot.png";
	}
    else{
		document.write("The weather is moderate");
		document.getElementById("weatherIcon").src="img/mid.png";
    }
}

document.write("<br><br> Basic Exercise 4")
weatherAdvicev2();
<<<<<<< HEAD



=======
>>>>>>> 4ae8fbf51947308c468b8eb1ae30cdbfacd6a0aa
