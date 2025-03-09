import 'the-new-css-reset/css/reset.css';
import '../styles/style.css';
import initAccordions from './utils/accordion';
import initSliders from './utils/slider';
import updateFooterYear from './utils/year';

document.addEventListener('DOMContentLoaded', () => {
  initAccordions();
  initSliders();
  updateFooterYear();
});
