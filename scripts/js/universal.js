$(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var imgPos = scrollTop / 2 + 'px';
        $('.image-one').css('transform', 'translateY(' + imgPos + ')');
    });

    $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            var imgPos = scrollTop / 4 + 'px';
            $('.image-two').css('transform', 'translateY(' + imgPos + ')');
        });