//Basic Ex1
function weatherAdvice() {
	temp = Math.floor(((Math.random()*30)-5));
	document.write("It is " + temp + "c outstide");
	if(temp<=10) {
		document.write("The weather is cold")
	} else {
		document.write("The weather is moderate");
	}
}

weatherAdvice();
function highestmax(){
	
	var array=[-3,1,7,9];
	max=array[0];
	for(i=0;i<array.length;i++)
	{
		if(array[i]>max){
			max=array[i];
		}
}

		document.write("max the number is"+ max);
}
highestmax();