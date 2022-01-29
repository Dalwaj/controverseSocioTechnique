$(document).ready(function(){
	valide = 0;
	$("#mail, #objet, textarea").focusin(function() {
		$(this).css({"border": "solid #1DB954 3px"});
		$("#erreurMail").css("display", "none");
		valide++;
	});
	$("#mail").focusout(function() {
		if ($(this).val().search(/[.*/@*.]/) >= 0){
			$(this).css({"border": "solid #1DB954 3px"});
		} else {
			$(this).css({"border": "solid red 3px"});
			$("#erreurMail").html("Insérez une adresse email valide");
			$("#erreurMail").css("display", "block");
			valide--;
		}
	});

	$("#objet").focusout(function(){
		if ($(this).val().length > 0){
			$(this).css({"border": "solid #1DB954 3px"});
			$("#erreurObjet").css("display", "none");
		} else {
			$(this).css({"border": "solid red 3px"});
			$("#erreurObjet").html("Insérez un objet");
			$("#erreurObjet").css("display", "block");
			valide--;
		}
	});

	$("textarea").focusout(function(){
		if ($(this).val().length > 0){
			$(this).css({"border": "solid #1DB954 3px"});
			$("#erreurContenu").css("display", "none");
		} else {
			$(this).css({"border": "solid red 3px"});
			$("#erreurContenu").html("Insérez un message à envoyer");
			$("#erreurContenu").css("display", "block");
			valide--;
		}
	});

	$("#envoyer").on("click", function(){
		nbElements = document.querySelectorAll("form>input, form>textarea").length;
		if (valide == nbElements-1){
			return true;
		} else {
			return false;
		}
	});

});