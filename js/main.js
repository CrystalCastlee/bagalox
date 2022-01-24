$(function() {
    $('.rev_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
    })
})


window.onscroll = function() {
  if(window.pageYOffset > 100){
    document.getElementById('head').classList.add('toolbar');
  }
  if(window.pageYOffset < 100){
    document.getElementById('head').classList.remove('toolbar');
  }
}

const burger = document.querySelector('.burger');
const close = document.querySelector('.menu__close');
const menu = document.querySelector('.menu-burger');

burger.addEventListener('click', () => {
  menu.classList.add('menu--visible');
});
close.addEventListener('click', () => {
  menu.classList.remove('menu--visible');
});


function getInput() {
  alert(document.getElementById("input").value);
    document.getElementById("input").value = "";
}


// let array = [];
// function sumDigPow(a, b) {
//   for(let i = 0; a <= b; i++){
//     array.push(i)
//   }
//   console.log(array)
// }
// sumDigPow(1,100)