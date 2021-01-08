$('.slider__wrapper').slick({
dots: true,
arrows: false,
});

let system = document.querySelector('.burger__menu');
let program = document.querySelector('.nav');

system.addEventListener('click', function () {
 system.classList.toggle("is-active");
 program.classList.toggle("is-active");
});
console.log(system);
console.log(program);