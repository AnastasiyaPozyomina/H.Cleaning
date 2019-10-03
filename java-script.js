$('.sl').slick();




//  галерея
var menuElem = document.getElementById('main');
var titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};