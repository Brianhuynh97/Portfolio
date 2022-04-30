$(document).ready(function () {
    $('.page-load').addClass('effect');
    $('.page-loaded').removeClass('effect');
    var atual = '#home';
    $(atual+'-nav').addClass('active');
    $(atual+'-ball').addClass('active');
    $("div").addClass('container-loader');
    
    const titulo = document.querySelector('.write');
    typeWriter(titulo);
    
    $('.navbar-collapse a[href^="#"]').on('click', function (e) {
        setTimeout(function () {
            if ($('.navbar-toggle').css('display') != 'none') $('.navbar-toggle').trigger("click");
        }, 1000);
    });
    
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        
        var id = $(this).attr('href');
        if (id == "#") id = "#home";
        
        $('.full-size'+atual).addClass('achatado');
        $("div").removeClass('container-loader');
        $(atual+'-nav').removeClass('active');
        $(atual+'-ball').removeClass('active');

        
        atual = id;
        $('.full-size'+atual).removeClass('achatado');
        $("div").addClass('container-loader');
        $(atual+'-nav').addClass('active');
        $(atual+'-ball').addClass('active');
        
        $('html, body').scrollTop(0);
    });
});
