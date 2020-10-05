


$('.row__item').click(function() {

  $('.row__popup').show();
  $('.row__closer').show();

  $(this).children('img').wrap('<div class="row__img-wrapper"></div>')

  $(this).clone().appendTo('.row__popup');


})

$('.row__closer').click(function() {

  $('.row__popup').empty();
  $('.row__popup').hide();
  $('.row__closer').hide();
})

