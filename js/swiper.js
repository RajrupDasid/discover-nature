const swiper = new Swiper('.banner-swiper',{
    loop: true,
    speed: 2000,
    effect: 'cube',
    grabCursor: true,
    cubeEffect:{
        shadow: true,
        slideShadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination:{
        el: '.swiper-pagination',
    },
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
});