const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu');
        closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');

});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

$('form').submit(function(e) {
    e.preventDefault();


    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});


$('.modal__close').on('click', function() {
    $('.overlay, #thanks').fadeOut('slow');
});