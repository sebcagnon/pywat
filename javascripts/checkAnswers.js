var answers = {
	q1: "no",
	q2: "yes",
	q3: "no",
	q4: "yes",
	q5: "yes",
	q6: "yes",
	q7: "no",
	q8: "yes",
	q9: "no",
	q10: "yes"
};

var score = 0;
var submitOnce = false;

$("#submit").click(function (e) {
	if (submitOnce == true) {
		return;
	}
	submitOnce = true;
	$(".hidden").removeClass("hidden");
	var submitted = $("input:checked");
	for (var i = 0; i < submitted.length; i++) {
		if (answers[submitted[i].name] == submitted[i].value) {
			score += 1;
		}
	};
	var comment = "This quiz is unable to distinguish your results from random chance with any statistical certainty. Sorry.";
	if (score == 10) {
		comment = "Congratulations! You are an expert at Python edge cases!";
	} else if (score == 9) {
		comment = "Great job! You are proficient at Python edge cases!"
	} else if (score == 8) {
		comment = "Not bad! You are skilled at Python edge cases!";
	}
	$("#submit").addClass("hidden");
	var content = "<h2>Your score: " + score + "/10!</h2>";
	content += "<p>" + comment + "</p>";
	content += "<h3>Share your score, challenge your friends!</h3>";
	content += '<div class="addthis_sharing_toolbox"></div>';
	$("#score").html(content);
});