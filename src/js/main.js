import 'the-new-css-reset/css/reset.css';
import '../styles/style.css';

const dependencies = [
  'ESlint',
  'Prettier',
  'PostCSS',
  'PostCSS Nesting',
  'Autoprefixer',
  'CSS Nano',
  'CSS Reset',
];

document.querySelector('.tags').innerHTML = dependencies
  .map((dependency) => `<p>${dependency}</p>`)
  .join('');
