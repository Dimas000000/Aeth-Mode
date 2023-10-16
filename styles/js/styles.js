$(document).ready(function(){
    /* ----- Both ----- */
    $('nav').hover(
        function()
        {
            $('#navBr').hide(200);
        },
        function()
        {
            $('#navBr').show(200);
        }
    );

    $(window).scroll(function(){
        if($(window).scrollTop() > $('header').outerHeight())
        {
            $('nav').addClass('navFixed');
        }
        else
        {
            $('nav').removeClass('navFixed');
        }
    });

    $('.description').hide(0);
    $('#videos-html').hover(
        function()
        {
            $('#videos-html .description').show(300);
        },
        function()
        {
            $('#videos-html .description').hide(200);
        }
    );
    $('#videos-css').hover(
        function()
        {
            $('#videos-css .description').show(300);
        },
        function()
        {
            $('#videos-css .description').hide(200);
        }
    );
    $('#videos-js').hover(
        function()
        {
            $('#videos-js .description').show(300);
        },
        function()
        {
            $('#videos-js .description').hide(200);
        }
    );

    /* ----- Mobile ----- */
    if($(window).width() < 650)
    {
        $('.banner').hide(0);
        $('.bannerMobileHTML').hide(0);
        $('.bannerMobileCSS').hide(0);
        $('.bannerMobileJS').hide(0);

        $('#videos-html').hover(
            function()
            {
                $('.bannerMobileHTML').show(200);
                $('#bannerHTML').show(200);
            },
            function()
            {
                $('.bannerMobileHTML').hide(200);
                $('#bannerHTML').hide(200);
            }
        );
        $('#videos-css').hover(
            function()
            {
                $('.bannerMobileCSS').show(200);
                $('#bannerHTML').show(200);
            },
            function()
            {
                $('.bannerMobileCSS').hide(200);
                $('#bannerHTML').hide(200);
            }
        );
        $('#videos-js').hover(
            function()
            {
                $('.bannerMobileJS').show(200);
                $('#bannerHTML').show(200);
            },
            function()
            {
                $('.bannerMobileJS').hide(200);
                $('#bannerHTML').hide(200);
            }
        );
    }
});