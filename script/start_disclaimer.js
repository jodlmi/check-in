"use strict";

window.addEventListener("load", function() {
	$("#ok").click(function(){
 		if($("#check").is(':checked')){
			$("#startinfo").show();  // checked
			$("#disclaimer").hide();  // checked
			$("#ticket").hide();  // checked
		}
		else{
			$("#disclaimer").show();  // unchecked
			$("#startinfo").hide();  // unchecked
		}
	});
})	