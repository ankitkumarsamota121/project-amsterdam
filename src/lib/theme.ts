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
  text: '#EFEDFF',
  background: '#0E0D18',
  paper: '#292843',
  grey: '#56585B',
  primary: '#E53855',
  lightGrey: '#7E8181',
  secondary: '#3F37C9',
  muted: '#A9A8CC'
});

// theme.layout.copy.maxWidth = [null, null, 'copyPlus'];
theme.fonts = merge(theme.fonts, fonts);

theme.text.title.fontSize = [5, 6];

export default theme;
