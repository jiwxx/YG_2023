const life_slide = new Swiper('#life_slide',{
    slidesPerView:1,
    loop:true,
    loopedSlides:1,
    autoplay:{
        disableOnInteraction : false,
        delay:3000}, //자동재생
        speed:800,
    navigation: { //이전, 다음 내비게이션 연결
        //next,prev 객체 연결 시 부모를 안적으면
        //body 안에 있는 모든 swiper-next,prev를 인식하기 때문에
        //개별인식 가능한 부모이름을 반드시 앞에 먼저 작성한다.
        nextEl: '#pawin_slide .swiper-button-next',
        prevEl: '#pawin_slide .swiper-button-prev',
    },
});

const news_slide = new Swiper("#news_slide",{
    slidesPerView:5,
    centeredSlides:true,
    loop:true,
    loopedSlides:2,
    autoplay:{
        delay:2000,
        disableOnInteraction : false,
    },
    speed:800,
    scrollbar:{el:'#News .swiper-scrollbar'},
})