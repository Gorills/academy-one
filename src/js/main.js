
$(".menu-btn").click(function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $(".header").toggleClass('header--active');

})

$(window).scroll(function() {
  var height = $(window).scrollTop();
  if(height > 500){
    $('header').addClass('header--fixed');
    $('.up').show();
  } else{
    $('header').removeClass('header--fixed');
    $('.up').hide();
  }
});


$('.show_popup').click(function(e) {
  e.preventDefault();
  $('.popup').show();
  $('.overlay_popup').show();
})
$('.overlay_popup').click(function() {
  $('.overlay_popup, .popup').hide();
})
