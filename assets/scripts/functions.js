import './modules/no-js';
import '../vue/main';

// import './web-components/message';
import './web-components/app-modal';

import 'styles/base.css';
import 'icons/close.svg';

const modal = document.querySelector('app-modal');
document.querySelector('#button').addEventListener('click', () => {
  modal.setAttribute('visible', true);
});

modal.addEventListener('close', () => {
  modal.setAttribute('visible', false);
});
