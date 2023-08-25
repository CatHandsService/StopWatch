
import { css } from 'styled-components';
import { Styles } from 'styled-components/dist/types';

export const sp = (
  first: Styles<object>,
  ...interpolations: any[]
) => css`
  @media (max-width: 648px) {
      ${css(first, ...interpolations)}
  }
`;

export const tab = (
  first: Styles<object>,
  ...interpolations: any[]
) => css`
  @media (min-width: 649px) and (max-width: 1024px) {
      ${css(first, ...interpolations)}
  }
`;
export const pc = (
  first: Styles<object> ,
  ...interpolations: any[]
) => css`
  @media (min-width: 1025px) {
      ${css(first, ...interpolations)}
  }
`;

