import { css } from '@emotion/react';

const PretendardFont = css`
  font-family:
    'Pretendard Variable',
    Pretendard,
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    sans-serif;
`;

const theme = {
  color: {
    white: '#FFFFFF',
    bg_white0: '#F8F9FC',
    bg_white1: '#F3F5FB',
    background: '#F8F9FC',
    lightgray0: '#EDEEF2',
    lightgray1: '#DFE2E7',
    lightgray2: '#C6CAD4',
    midgray1: '#9FA4AE',
    midgray2: '#6B6F77',
    darkgray: '#3E3F45',
    blackgray: '#222224',
    black: '#17171A',

    purple1: '#5451FF',
    purple2: '#7774FF',
    purple3: '#9997FF',
    purple4: '#BBB9FF',
    purple5: '#DDDCFF',
    purple6: '#EEEEFF',

    error: '#FF4668',

    kakaoyellow: '#FEE500',
    kakaobrown: '#222',
  },
  font: {
    'head01-b-22': css`
      ${PretendardFont};
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 145%;
      letter-spacing: 0px;
    `,
    'head02-b-20': css`
      ${PretendardFont};
      font-size: 2rem;
      font-weight: 700;
      line-height: 140%;
      letter-spacing: 0px;
    `,
    'head03-b-18': css`
      ${PretendardFont};
      font-size: 1.8rem;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0px;
    `,
    'head04-b-16': css`
      ${PretendardFont};
      font-size: 1.6rem;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0px;
    `,
    'subhead01-sb-18': css`
      ${PretendardFont};
      font-size: 1.8rem;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0px;
    `,
    'subhead02-sb-16': css`
      ${PretendardFont};
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 140%;
      letter-spacing: 0px;
    `,
    'subhead03-m-16': css`
      ${PretendardFont};
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: 0px;
    `,
    'subhead04-sb-15': css`
      ${PretendardFont};
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 140%;
      letter-spacing: 0px;
    `,
    'subhead05-sb-14': css`
      ${PretendardFont};
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 140%;
      letter-spacing: 0px;
    `,
    'body01-r-15': css`
      ${PretendardFont};
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0px;
    `,
    'body02-r-14': css`
      ${PretendardFont};
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0px;
    `,
    'body03-r-12': css`
      ${PretendardFont};
      font-size: 1.2rem;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0px;
    `,
    'body04-m-12': css`
      ${PretendardFont};
      font-size: 1.2rem;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0px;
    `,
    'body05-r-10': css`
      ${PretendardFont};
      font-size: 1rem;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0px;
    `,
    'body06-m-15': css`
      ${PretendardFont};
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: 0px;
    `,
  },
};

export type ColorType = typeof theme.color;
export type FontType = typeof theme.font;

export interface ThemeType {
  color: ColorType;
  font: FontType;
}

export default theme;
