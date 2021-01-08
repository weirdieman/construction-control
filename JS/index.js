$('.slider__wrapper').slick({
dots: true,
arrows: false,
});

let system = document.querySelector('.burger__menu');

system.addEventListener('click', function () {
 system.classList.add("is-active"),
})
console.log(system);