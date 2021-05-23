import './src/styles/global.css';

import '@fontsource/space-grotesk';
import 'tailwindcss/dist/base.css';
import 'tailwindcss/dist/components.css';
import 'tailwindcss/dist/utilities.css';

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`,
  );

  if (answer === true) {
    window.location.reload();
  }
};
