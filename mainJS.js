function openNav() {

      document.getElementById("sidenav") .style.width = "80%";
  }
  function closeNav() {
    document.getElementById("sidenav").style.width = "0";}


    /* ---- particles.js config ---- */




$(document).ready(function () {

    hideObjects();
    checkObjectsVisibility();

    $(window).scroll(function () {
        hideObjects();
        checkObjectsVisibility();
    });

    function hideObjects() {
        $('.fadeInUp-scroll').css({
            'opacity': 0,
            'transform': 'translateY(5vw)'
        });
    }

    function checkObjectsVisibility() {
        $('.fadeInUp-scroll').each(function (i) {
            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).outerHeight();

            if (windowBottom > objectTop - 100) {
                $(this).addClass('visible');
            } else {
                $(this).removeClass('visible');
            }
        });
    }



     // back to top
     $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.go-top').fadeIn(400);
        } else {
            $('.go-top').fadeOut(400);
        }
    });
    
    $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 400);
    })
});



