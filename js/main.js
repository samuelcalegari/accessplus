/* eslint-disable semi */
const resizeText = function (multiplier) {
    if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.1) + "em";
}

const getsizeText = function(){
    return document.body.style.fontSize;
}

const setsizeText = function(size){
    document.body.style.fontSize = size;
}

const changeTheme = function (theme) {

    let elements = ['body', '.block', 'header', 'footer', 'div', 'ul', 'li', 'nav', 'input', 'select', 'a', 'h1', 'h2', 'h3'];

    elements.forEach(e => {
        $(e).css('background-color', theme.backgroundColor);
        $(e).css('background-image', 'none');
        $(e).css('color', theme.textColor);
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

    $('#menu_block_accessplus_theme_picker').on('change', function () {
        const theme = {};
        switch (this.value) {
            case 'bw' : {
                theme.backgroundColor = '#000';
                theme.textColor = '#fff';
                break;
            }
            case 'wb' : {
                theme.backgroundColor = '#fff';
                theme.textColor = '#000';
                break;
            }
            case 'soviet' : {
                theme.backgroundColor = '#f00';
                theme.textColor = '#ff0';
                break;
            }
            default : {
                theme.backgroundColor = '#000';
                theme.textColor = '#fff';
            }
        }

        changeTheme(theme);
    })

    $("#block_accessplus_save_params").on('click', function(){
        getsizeText();
        $.get(accesPlus.mroot + '/blocks/accessplus/save.php' +
        '?theme=' + $('#menu_block_accessplus_theme_picker').val() +
        '&fontsize=' + getsizeText() );
    })
});
