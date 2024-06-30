import { css } from "@emotion/react";

import Reset from "./reset";

const GlobalStyle = css`
  ${Reset}
  * {
    box-sizing: border-box;

    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  html {
    font-size: 62.5%;
    scrollbar-width: none;
  }

  #root {
    min-width: 37.5rem;
    min-height: 100vh;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
