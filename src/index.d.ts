import { CSSProp } from 'styled-components';

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}

declare module 'tailwindConfig' {
  let a: any;
  export = a;
}
