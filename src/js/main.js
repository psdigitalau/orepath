import 'the-new-css-reset/css/reset.css';
import '../styles/style.css';
import initAccordions from './utils/accordion';
import initSliders from './utils/slider';
import updateFooterYear from './utils/year';
import reduceHeaderOnScoll from './utils/header';
import mobileMenuFunctionality from './utils/mobileMenu';

document.addEventListener('DOMContentLoaded', () => {
  reduceHeaderOnScoll();
  initAccordions();
  initSliders();
  updateFooterYear();
  mobileMenuFunctionality();
});
