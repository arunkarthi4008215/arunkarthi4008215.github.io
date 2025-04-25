$(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > 0) {
        $('.top-nav-bar-container').addClass('scrolled');
    } else {
        $('.top-nav-bar-container').removeClass('scrolled');
    }
});

function toggleOurService(value) {
    const $toggleButton = $('.toggle-button')
    for (i = 0; i < $toggleButton.length; i++) {
        $toggleButton.removeClass('active');
    }
    $($toggleButton[value]).addClass('active');

    const $toggleCard = $('#toggle-our-service-card')
    $toggleCard.removeClass();
    $toggleCard.addClass('card active-card ' + 'active-' + (value + 1).toString());
}

toggleOurService(0);

var textarea = document.getElementById("myTextarea");
if (textarea) {
    textarea.value = "";
}