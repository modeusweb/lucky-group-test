import { fetchDescription } from './modules/fetchDescription.js';
import { animateFlags } from './modules/flagsAnimation.js';
import { burgerNav } from './modules/burgerNav.js';

document.addEventListener('DOMContentLoaded', async () => {
  await fetchDescription();
  animateFlags();
  burgerNav();
});
