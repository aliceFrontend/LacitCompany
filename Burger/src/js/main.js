$(document).ready(function(){
  var link = $('.menu-link');
  var link__active = $('.menu-link__active');
  // var menu = $('.menu');
  // var nav__link = $('.menu a');

  link.click(function(){
    link.toggleClass('menu-link__active');
    // menu.toggleClass('menu__active');
  })
  nav__link.click(function(){
    link.toggleClass('menu-link__active');
    // menu.toggleClass('menu__active');
  })
})