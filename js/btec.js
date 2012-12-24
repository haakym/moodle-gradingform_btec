M.gradingform_btec = {};

/**
 * This function is called for each btec on page.
 */
M.gradingform_btec.init = function(Y, options) {
    var currentfocus = Y.one('.markingbtecremark');

    Y.all('.markingbtecremark').on('blur', function(e) {
        currentfocus = e.currentTarget;
    });
    Y.all('.markingbteccomment').on('click', function(e) {
        currentfocus.set('value', currentfocus.get('value') + '\n' + e.currentTarget.get('innerHTML'));
        currentfocus.focus();
    });

    Y.all('.showmarkerdesc input[type=radio]').on('click', function(e) {
        if (e.currentTarget.get('value')=='false') {
            Y.all('.criteriondescriptionmarkers').addClass('hide');
        } else {
            Y.all('.criteriondescriptionmarkers').removeClass('hide');
        }
    });

    Y.all('.showstudentdesc input[type=radio]').on('click', function(e) {
        if (e.currentTarget.get('value')=='false') {
            Y.all('.criteriondescription').addClass('hide');
        } else {
            Y.all('.criteriondescription').removeClass('hide');
        }
    });
};