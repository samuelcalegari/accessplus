/* eslint-disable semi */
const resizeText = function (multiplier) {
    if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.1) + "em";
}

const changeTheme = function (textColor, backgroundColor) {

    let elements = ['body', '.block', 'header', 'footer', 'div', 'ul', 'li', 'nav', 'input', 'a', 'h1', 'h2', 'h3'];

    elements.forEach(e => {
        $(e).css('background-color', backgroundColor);
        $(e).css('background-image', 'none');
        $(e).css('color', textColor);
        $(e).css('text-shadow', 'none');
    });
}

$(function () {

    $("#block_accessplus_decrease_font").on('click', function () {
        resizeText(-1);
    })

    $("#block_accessplus_increase_font").on('click', function () {
        resizeText(1);
    })

    changeTheme('#fff', '#000');
    changeTheme('#000', '#fff');
});
