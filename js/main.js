function resizeText(multiplier) {
    if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.1) + "em";
}

$(function() {

    $("#block_accessplus_decrease_font").on('click', function(){
        resizeText(-1);
    })

    $("#block_accessplus_increase_font").on('click', function(){
        resizeText(1);
    })

});
