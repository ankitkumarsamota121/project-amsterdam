import base from '@hackclub/theme';
import { merge } from 'lodash';

const theme = base;

theme.useColorSchemeMediaQuery = false;

const fonts = {
  heading:
    '"Rajdhani", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  body:
    '"Raleway", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
};

theme.buttons.primary = merge(theme.buttons.primary, {
  textTransform: 'uppercase'
});

theme.colors = merge(theme.colors, {
  text: '#ffffff',
  background: '#17171d',
  elevated: '#252429',
  sheet: '#252429',
  sunken: '#121217',
  border: '#252429',
  placeholder: '#3c4858',
  secondary: '#8492a6',
  muted: '#8492a6',
  accent: '#5bc0de'
});

// theme.layout.copy.maxWidth = [null, null, 'copyPlus'];
theme.fonts = merge(theme.fonts, fonts);

theme.text.title.fontSize = [5, 6];

export default theme;
