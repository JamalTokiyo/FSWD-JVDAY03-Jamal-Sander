
function grades() {
	names =  ["Martin", "Thomas", "Klaus", "Maria", "David"];
	scores = [76      , 85      , 65     , 93     , 81     ];
	averageScore = 0;
	grades =      ["F","D","C","B","A"];
	gradeScores = [60 ,70 ,80 ,90 ,100];
	averageGrade = "";
	for(i = 0; i < scores.length; i++) {
		averageScore+= scores[i];
	}
	averageScore= averageScore/scores.length;
	for(i = gradeScores.length-1; i>=0; i--) {
		if(averageScore>=gradeScores[i]) {
			averageGrade = grades[i];
			break;
		}
	}
	document.write("<br>The average score is: " + averageScore + "<br> The average grade is: " + averageGrade);
}

grades();

