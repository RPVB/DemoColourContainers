$( document ).ready(function() {
	for (var i = 0; i < 36; i++) {
		$( "#main-container" ).append( "<div id='container" + i + "' class='container'>" + i + "</div>" );
	};

	$(".container").click(function() {
		console.log("test");
		$(this).addClass("red");
	});
});