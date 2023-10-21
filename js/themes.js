$(document).ready(function()
{
    let themeValue;
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme)
    {
        themeValue = savedTheme;
        SetTheme(savedTheme);
    }
    else
    {
        themeValue = 'dark';
        SetTheme(themeValue);
        localStorage.setItem("theme", themeValue);
    }

    $('#theme').click(function(){
        if(themeValue == 'light')
        {
            $('#lightSelect').fadeOut(0);
            $('#darkSelect').fadeIn(0);

            themeValue = 'dark';
            SetTheme('dark');
            localStorage.setItem("theme", themeValue);
        }
        else
        {
            $('#darkSelect').fadeOut(0);
            $('#lightSelect').fadeIn(0);
            
            themeValue = 'light';
            SetTheme(themeValue);
            localStorage.setItem("theme", themeValue);
        }
    });

    if(themeValue == 'light')
    {
        $('#lightSelect').fadeIn(0);
        $('#darkSelect').fadeOut(0);
    }
    else
    {
        $('#darkSelect').fadeIn(0);
        $('#lightSelect').fadeOut(0);
    }
    
    function SetTheme(Theme)
    {
        switch(Theme)
        {
            case "light":
                RemoveTheme("dark");

                $('.cor-tema').addClass('cor-tema-claro');
                $('.cor-text').addClass('cor-text-claro');
                $('.cor-prim').addClass('cor-prim-claro');
                $('.cor-sec').addClass('cor-sec-claro');
                $('.cor-ter').addClass('cor-ter-claro');
                $('.cor-shadow').addClass('cor-shadow-claro');
            break;
            case "dark":
                RemoveTheme("light");

                $('.cor-tema').addClass('cor-tema-escuro');
                $('.cor-text').addClass('cor-text-escuro');
                $('.cor-prim').addClass('cor-prim-escuro');
                $('.cor-sec').addClass('cor-sec-escuro');
                $('.cor-ter').addClass('cor-ter-escuro');
                $('.cor-shadow').addClass('cor-shadow-escuro');
            break;
        }
    }
    function RemoveTheme(Theme)
    {
        switch(Theme)
        {
            case "light":
                $('.cor-tema').removeClass('cor-tema-claro');
                $('.cor-text').removeClass('cor-text-claro');
                $('.cor-prim').removeClass('cor-prim-claro');
                $('.cor-sec').removeClass('cor-sec-claro');
                $('.cor-ter').removeClass('cor-ter-claro');
                $('.cor-shadow').removeClass('cor-shadow-claro');
            break;
            case "dark":
                $('.cor-tema').removeClass('cor-tema-escuro');
                $('.cor-text').removeClass('cor-text-escuro');
                $('.cor-prim').removeClass('cor-prim-escuro');
                $('.cor-sec').removeClass('cor-sec-escuro');
                $('.cor-ter').removeClass('cor-ter-escuro');
                $('.cor-shadow').removeClass('cor-shadow-escuro');
            break;
        }
    }
});
