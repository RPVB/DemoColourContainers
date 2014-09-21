$(document).ready(function() {
    for (var i = 0; i < 36; i++) {
        $("#main-container").append("<div id='container" + i + "' class='container'>" + i + "</div>");
    }
    ;

    $(".container").click(function() {

        random = Math.round(Math.random() * 10);
        if (random < 3) {
            $(this).removeClass('green').removeClass('red').removeClass('blue');
            $(this).addClass("red");
        }
        if (random > 3 && random < 6) {
            $(this).removeClass('green').removeClass('red').removeClass('blue');
            $(this).addClass("green");
        }
        if (random > 6) {
            $(this).removeClass('green').removeClass('red').removeClass('blue');
            $(this).addClass("blue");
        }
        hmpps = $(this).touching();
        console.log(hmpps);

        $.each(hmpps, function(key, valueObj) {
            var bordering = $(document.getElementById(valueObj.getAttribute('id')));
            if ($(this).attr('id') != bordering.attr('id')) {
                if ($(this).hasClass("red") && bordering.hasClass("red")) {
                    console.log('kaboem klengreblankbam boem');
                }
            }
        });

    });
});