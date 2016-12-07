//add class after Xpx scroll
$(window).on("scroll touchmove", function () {
    $('#header_nav').toggleClass('tinyheader', $(document).scrollTop() > 100);
    $('#nav').toggleClass('navtiny', $(document).scrollTop() > 100);
});


//scrollanimation
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});

//time delay adding of class
$(document).ready(function(){
    window.setTimeout(function(){
        $("#botbox1").addClass("fromleft");
    },1000);
});

//add and remove mobile toggle and nav
$(function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
});

//Parralex-function
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /3 +'%)',
  });
});
