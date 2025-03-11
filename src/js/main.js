import 'the-new-css-reset/css/reset.css';
import '../styles/style.css';
import initAccordions from './utils/accordion';
import initSliders from './utils/slider';
import updateFooterYear from './utils/year';
import reduceHeaderOnScoll from './utils/header';
import mobileMenuFunctionality from './utils/mobileMenu';
import initLottieAnimation from './utils/logoAnimation';
import initParallax from './utils/imageParallax';

document.addEventListener('DOMContentLoaded', () => {
  reduceHeaderOnScoll();
  initLottieAnimation();
  initAccordions();
  initSliders();
  updateFooterYear();
  mobileMenuFunctionality();
  initParallax();
});
