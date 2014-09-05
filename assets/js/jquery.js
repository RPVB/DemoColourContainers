$( document ).ready(function() {
	for (var i = 0; i < 36; i++) {
		$( "#main-container" ).append( "<div id='container" + i + "' class='container'>" + i + "</div>" );
	};

	$(".container").click(function() {
          hmpps = $(this).touching();
		random = Math.round(Math.random()* 10); 
                if(random < 3 ){
                    $.each(hmpps, function(key,valueObj){
                       console.log(key.valueOf("red"));
                    });
                    $(this).removeClass('green').removeClass('red').removeClass('blue');
                    $(this).addClass("red");
                }
                if(random > 3 && random < 6 ){
                    $(this).removeClass('green').removeClass('red').removeClass('blue');
                    $(this).addClass("green");
                }
                if(random > 6 ){
                    $(this).removeClass('green').removeClass('red').removeClass('blue');
                    $(this).addClass("blue");
                }
	});
});