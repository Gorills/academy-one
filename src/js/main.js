
$(".menu-btn").click(function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $(".header").toggleClass('header--active');

})
