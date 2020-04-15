window.addEventListener("DOMContentLoaded", function () {



    // плавный скролл

    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });

    // Поп ап Галерея

    $(function () {
        $('.gallery_wrapp').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
        });
    });


    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Спасибо за обращение! Мы свяжемся с Вами в течение 10 минут");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $('.btn').on('click', function () {
        $('.overley-form, #consultation').fadeIn('slow');
    });

    $('.modal_close').on('click', function () {
        $('.overley-form, #consultation').fadeOut('slow');
    });


});