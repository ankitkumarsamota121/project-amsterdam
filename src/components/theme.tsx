import React from 'react';
import {ThemeProvider} from 'styled-components';
import resolveConfig from 'tailwindcss/resolveConfig';
// @ts-expect-error : Importing tailwind config from a JS File
import tailwindConfig from '../../tailwind.config';

const {theme} = resolveConfig(tailwindConfig);

// eslint-disable-next-line
const Theme = (props: any) => <ThemeProvider {...props} theme={theme} />;

export default Theme;
