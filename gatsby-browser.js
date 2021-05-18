import './src/styles/global.css';

import 'typeface-raleway';
import 'typeface-poppins';
import 'tailwindcss/dist/base.css';
import 'tailwindcss/dist/components.css';
import 'tailwindcss/dist/utilities.css';

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
    // console.log(`# IntersectionObserver is polyfilled!`);
  }
};
