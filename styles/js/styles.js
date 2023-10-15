$(document).ready(function(){
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
            $('#videos-html .description').show(200);
        },
        function()
        {
            $('#videos-html .description').hide(200);
        }
    );
    $('.description').hide(0);
    $('#videos-css').hover(
        function()
        {
            $('#videos-css .description').show(200);
        },
        function()
        {
            $('#videos-css .description').hide(200);
        }
    );
    $('.description').hide(0);
    $('#videos-js').hover(
        function()
        {
            $('#videos-js .description').show(200);
        },
        function()
        {
            $('#videos-js .description').hide(200);
        }
    );
});