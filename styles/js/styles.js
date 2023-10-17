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
        $('.bannerMobile').hide(0);

        $('#videos-html').hover(
            function()
            {
                $('#videos-html .bannerMobile').show(200);
            },
            function()
            {
                $('#videos-html .bannerMobile').hide(200);
            }
        );
        $('#videos-css').hover(
            function()
            {
                $('#videos-css .bannerMobile').show(200);
            },
            function()
            {
                $('#videos-css .bannerMobile').hide(200);
            }
        );
        $('#videos-js').hover(
            function()
            {
                $('#videos-js .bannerMobile').show(200);
            },
            function()
            {
                $('#videos-js .bannerMobile').hide(200);
            }
        );
    }
});