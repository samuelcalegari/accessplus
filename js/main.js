/* eslint-disable semi */
const resizeText = function (multiplier) {
    if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.1) + "em";
}

const getsizeText = function () {
    return document.body.style.fontSize;
}

const setsizeText = function (size) {
    document.body.style.fontSize = size;
}

const changeTheme = function (theme) {

    let elements = ['body', '.block', 'header', 'footer', 'div', 'ul', 'li', 'nav', 'input', 'select', 'a', 'h1', 'h2', 'h3'];

    elements.forEach(e => {

        $(e).not('.acces_plus_keep')
            .css('background-color', theme.backgroundColor)
            .css('background-image', 'none')
            .css('color', theme.textColor)
            .css('text-shadow', 'none')
    });


    $('#block_accessplus_save_params')
        .css('-webkit-filter', 'invert(' + (theme.invert | 0) + ')')
        .css('filter', 'invert(' + (theme.invert | 0) + ')');
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
                theme.invert = true;
                break;
            }
            case 'wb' : {
                theme.backgroundColor = '#fff';
                theme.textColor = '#000';
                theme.invert = false;
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

    $("#block_accessplus_save_params").on('click', function () {
        getsizeText();
        $.get(accesPlus.mroot + '/blocks/accessplus/save.php' +
            '?theme=' + $('#menu_block_accessplus_theme_picker').val() +
            '&fontsize=' + getsizeText());
    })

    $("#block_accessplus_reset").on('click', function () {
        getsizeText();
        $.get(accesPlus.mroot + '/blocks/accessplus/save.php?theme=none&fontsize=none', function () {
            location.reload();
        });
    })

    $.getJSON(accesPlus.mroot + '/blocks/accessplus/get.php', function (config) {

        if (config.fontsize != "") {
            document.body.style.fontSize = config.fontsize
        }

        if (config.theme != "") {
            $('#menu_block_accessplus_theme_picker').val(config.theme);
            $('#menu_block_accessplus_theme_picker').trigger('change')
        }
    });
});
