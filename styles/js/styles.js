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
            $('#videos-html .description').show(500);
        },
        function()
        {
            $('#videos-html .description').hide(500);
        }
    );
    $('#videos-css').hover(
        function()
        {
            $('#videos-css .description').show(500);
        },
        function()
        {
            $('#videos-css .description').hide(500);
        }
    );
    $('#videos-js').hover(
        function()
        {
            $('#videos-js .description').show(500);
        },
        function()
        {
            $('#videos-js .description').hide(500);
        }
    );

    /* ----- Mobile ----- */
    if($(window).width() < 650)
    {
        $('.bannerContainer').hide(0);
        $('#videos-html').hover(
            function()
            {
                $('#videos-html .sectionContainer .bannerContainer').show(500);
            },
            function()
            {
                $('#videos-html .sectionContainer .bannerContainer').hide(500);
            }
        );
        $('#videos-css').hover(
            function()
            {
                $('#videos-css .sectionContainer .bannerContainer').show(500);
            },
            function()
            {
                $('#videos-css .sectionContainer .bannerContainer').hide(500);
            }
        );
        $('#videos-js').hover(
            function()
            {
                $('#videos-js .sectionContainer .bannerContainer').show(500);
            },
            function()
            {
                $('#videos-js .sectionContainer .bannerContainer').hide(500);
            }
        );
    }
});