/* eslint-disable import/no-unresolved */
import Swiper from 'swiper/bundle';

export default function initSliders() {
  const sliders = document.querySelectorAll('.swiper-cont');

  if (sliders.length < 1) return;

  sliders.forEach((sliderCont) => {
    const slider = sliderCont.querySelector('.swiper');

    const swiperObj = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 32,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: sliderCont.querySelector('.swiper-button-next'),
        prevEl: sliderCont.querySelector('.swiper-button-prev'),
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
        },
      },
    });
    return swiperObj;
  });
}
