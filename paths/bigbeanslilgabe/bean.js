$(document).ready(function () {
    $.(".calendar").click(function(){
        var WOOF = $("#woof") [0];
        WOOF.play();
        var text = "done!";
        var box = $(".calendar")
        var addTextToBox = function(){
            var textBox = $("<span><span>");
            textBox.addClass("text-box");
            textBox.append(text);
            box.append(textBox)
        }
        box.click(addTextToBox)
    });
    box.click(WOOF.play());
});

