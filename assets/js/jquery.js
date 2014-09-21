$(document).ready(function() {
    for (var i = 0; i < 36; i++) {
        $("#main-container").append("<div id='container" + i + "' class='container'>" + i + "</div>");
    };

    $(".container").click(function() {

    var currentContainer = ($(this));
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

        $.each(hmpps, function(key, valueObj) {
            var bordering = $(document.getElementById(valueObj.getAttribute('id')));
            console.log(currentContainer.hasClass("red"));
                if (currentContainer.hasClass("red") && bordering.hasClass("red")) {
                    alert('container te dicht bij een container geplaatst die volgens voorschrift niet in de buurt mogen staan.\n\
                     kan een gevaarlijk chemische reactie kan veroorzaken.');
                }
        });

    });
});