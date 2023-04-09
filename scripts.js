$(document).ready(onReady);

function onReady() {
    $('#reset-button').addClass('hidden');

    $('#calculate').on('click', calculate);

    $('#reset-button').on('click', resetEverything);
}

function calculate(event) {
    event.preventDefault();

    $('#reset-button').removeClass('hidden');

    let weightInKg = Number($('#weight').val());

    let uac = updateUac(weightInKg);
    updateUvc(uac);
    updateEttSize(weightInKg);
    updateEttInsertion(weightInKg);
    updateEpinephrin(weightInKg);
    updateEt(weightInKg);
    updateMkd(weightInKg);
}

function updateUac(weightInKg) {
    let uac = (weightInKg * 3) + 9;
    $('#uac-value').text(uac);
    return uac;
}

function updateUvc(uac) {
    let uvc = (uac / 2) + 1;
    $('#uvc-value').text(uvc);
}

function updateEttSize(weightInKg) {
    let ettSize;

    let weightInGrams = 1000 * weightInKg;

    if (weightInGrams >= 3000) {
        ettSize = 3.5;
    } else if (weightInGrams >= 2000) {
        ettSize = 3.5;
    } else if (weightInGrams >= 1000) {
        ettSize = 3.0;
    } else {
        ettSize = 2.5;
    }

    $('#ett-size-value').text(ettSize);
}

function updateEttInsertion(weightInKg) {
    let ettInsertion;

    if ((weightInKg < 0.5) || (weightInKg > 4.2)) {
        $('#ett-insertion-value').text('Off The Charts');
        return;
    }

    if (weightInKg >= 3.2) {
        ettInsertion = 9.0;
    } else if (weightInKg >= 2.5) {
        ettInsertion = 8.5;
    } else if (weightInKg >= 1.9) {
        ettInsertion = 8.0;
    } else if (weightInKg >= 1.5) {
        ettInsertion = 7.5;
    } else if (weightInKg >= 1.1) {
        ettInsertion = 7.0;
    } else if (weightInKg >= 0.9) {
        ettInsertion = 6.5;
    } else if (weightInKg >= 0.7) {
        ettInsertion = 6.0;
    } else if (weightInKg >= 0.5) {
        ettInsertion = 5.5;
    }

    $('#ett-insertion-value').text(ettInsertion);
}

function updateEpinephrin(weightInKg) {
    let iv = 0.02 * weightInKg;
    let id = 0.2 * weightInKg;

    $('#iv-value').text(iv);
    $('#id-value').text(id);

};

function updateEt(weightInKg) {
    let et_mg = 0.1 * weightInKg;
    let et_ml = 1 * weightInKg;

    $('#et-mg-value').text(et_mg);
    $('#et-ml-value').text(et_ml);

}

function updateMkd(weightInKg) {
    let mkdSixty = 60 * weightInKg / 24;
    let mkdEighty = 80 * weightInKg / 24;
    let mkdHundred = 100 * weightInKg / 24;

    $('#mkd-sixty-value').text(mkdSixty.toFixed(3));
    $('#mkd-eighty-value').text(mkdEighty.toFixed(3));
    $('#mkd-hundred-value').text(mkdHundred.toFixed(3));
}

function resetEverything() {
    $('#reset-button').addClass('hidden');
    $('#weight').val('');
    $('#uac-value').text('-');
    $('#uvc-value').text('-');
    $('#ett-size-value').text('-');
    $('#ett-insertion-value').text('-');
    $('#ett-insertion-value').text('-');
    $('#iv-value').text('-');
    $('#id-value').text('-');
    $('#et-mg-value').text('-');
    $('#et-ml-value').text('-');
    $('#mkd-sixty-value').text('-');
    $('#mkd-eighty-value').text('-');
    $('#mkd-hundred-value').text('-');

}
