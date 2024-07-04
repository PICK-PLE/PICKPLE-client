import { css } from '@emotion/react';

import Reset from './reset';

const GlobalStyle = css`
  ${Reset}
  * {
    box-sizing: border-box;

    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }

  :root {
    --min-width: 375px;
    --max-width: 430px;
  }

  html,
  body {
    font-size: 62.5%;
    scrollbar-width: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #root {
    width: 100%;
    min-width: var(--min-width);
    max-width: var(--max-width);
    min-height: 100vh;
    background-color: #fff;
    margin: 0 auto;
  }

  @media (min-width: 430px) {
    #root {
      max-width: var(--max-width);
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
