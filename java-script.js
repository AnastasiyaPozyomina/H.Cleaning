$('.header-carusel').slick({
  autoplay:true,
  autoplaySpeed:3000,
  dots:true
 
});


$('.gallery').slick({
  slidesToShow: 3, //сколько слайдов показывать в карусели
  slidesToScroll: 3, // сколько слайдов прокручивать за раз
  autoplay:true,
  autoplaySpeed:2000,
  nextArrow: '<div class="sprite-next"></div>', // Кастомная стрелка "далее"
  prevArrow: '<div class="sprite-prev"></div>' // Кастомная стрелка "назад"
 
});

//  галерея
var menuElem = document.getElementById('main');
var titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};


