$(document).ready(function(){
    /* ----- Both ----- */
    $('.description').hide(0);
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

    /* ----- Desktop ----- */
    if($(window).width() > 700)
    {
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
    }

    /* ----- Mobile ----- */
    if($(window).width() < 700)
    {
        $('.bannerMobile').hide(0);

        $('#videos-html').click(
            function()
            {
                $('#videos-css .bannerMobile').hide(200);
                $('#videos-js .bannerMobile').hide(200);
                $('#videos-html .bannerMobile').show(200);

                $('#videos-css .sectionContainer .logo').show(200);
                $('#videos-js .sectionContainer .logo').show(200);
                $('#videos-html .sectionContainer .logo').hide(200);

                $('#videos-css .sectionContainer').css('padding', '5vw');
                $('#videos-js .sectionContainer').css('padding', '5vw');
                $('#videos-html .sectionContainer').css('padding', '0');

                $('#videos-css .description').hide(200);
                $('#videos-js .description').hide(200);
                $('#videos-html .description').show(200);
            }
        );
        $('#videos-css').click(
            function()
            {
                $('#videos-html .bannerMobile').hide(200);
                $('#videos-js .bannerMobile').hide(200);
                $('#videos-css .bannerMobile').show(200);
                
                $('#videos-html .sectionContainer .logo').show(200);
                $('#videos-js .sectionContainer .logo').show(200);
                $('#videos-css .sectionContainer .logo').hide(200);

                $('#videos-html .sectionContainer').css('padding', '5vw');
                $('#videos-js .sectionContainer').css('padding', '5vw');
                $('#videos-css .sectionContainer').css('padding', '0');

                $('#videos-html .description').hide(200);
                $('#videos-js .description').hide(200);
                $('#videos-css .description').show(200);
            }
        );
        $('#videos-js').click(
            function()
            {
                $('#videos-html .bannerMobile').hide(200);
                $('#videos-css .bannerMobile').hide(200);
                $('#videos-js .bannerMobile').show(200);

                $('#videos-html .sectionContainer .logo').show(200);
                $('#videos-css .sectionContainer .logo').show(200);
                $('#videos-js .sectionContainer .logo').hide(200);

                $('#videos-html .sectionContainer').css('padding', '5vw');
                $('#videos-css .sectionContainer').css('padding', '5vw');
                $('#videos-js .sectionContainer').css('padding', '0');

                $('#videos-html .description').hide(200);
                $('#videos-css .description').hide(200);
                $('#videos-js .description').show(200);
            }
        );
    }
});