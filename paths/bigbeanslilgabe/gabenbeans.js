$(document).ready(function() {
	$("body").mousemove (function(event) {
		$("span").text(event.pageX + "," + event.pageY)
		
	}
	});
