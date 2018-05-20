$(document).ready(function() {
  "use strict";

  //Navbar Auto-Hide on Scroll

  var c,
      currentScrollTop = 0,
      navbar = $("nav");

  $(window).scroll(function() {
    var a = $(window).scrollTop()-10;
    var b = navbar.height();

    currentScrollTop = a;

    if (c < currentScrollTop && a > b + b) {
      navbar.addClass("scrollUp");

    } else if (c > currentScrollTop && !(a < b)) {
      navbar.removeClass("scrollUp");
    }
    c = currentScrollTop;
  });

  //Smooth Scrolling to Internal Link

  $('a[href=\\#top]').on('click',function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, 'slow'); 
  });
  
  $('a:not([href="#top"]):not([href*="https://"])').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').animate({
        'scrollTop': $target.offset().top
    },1000,'swing', function () {
        navbar.addClass("scrollUp");
        window.location.hash = target;
    });
  });

  //Collapse Navbar when particular Section is Clicked
  
  $('a[href*="#"]').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  //Jquery NiceScroll Plugin

  $(function() {  
    $("body").niceScroll({
      cursorcolor: "darkgrey",
      cursorborder: "1px solid black",
      zindex: 10000
    });
  });

  //ScrollSpy

  $('body').scrollspy({
    target: '#mainNav',
    offset: 50
  });
});
