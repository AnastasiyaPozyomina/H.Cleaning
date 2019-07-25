$('.sl').slick();

$('.sl-2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

var h1 = document.createElement('h1');
h1.className = "header-title";
h1.innerHTML="Cleaning Yours House Make World & Clean Mine";
document.body.insertBefore(h1, document.body.firstChild);
setTimeout(function () {
    h1.parentNode.removeChild(h1);
    },2000);