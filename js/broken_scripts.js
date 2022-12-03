/**SET UP CHARACTER CARD CLICK EVENTS***************************/
function setUpCharacterCardClickEvents() {
    $('.char-card-navitem').click(function() {
        var charCardNavTarget = $(this).attr('data-target');
        $('.char-card-navitem').removeClass('selected');
        $(this).addClass('selected');
        $(this).parent().parent().find('div[class^=char-card-body-').removeClass('d-block');
        $(this).parent().parent().find(`char-card-body-${charCardNavTarget}`).addClass('d-block');
    });
}