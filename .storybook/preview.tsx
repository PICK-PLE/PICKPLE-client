import React from 'react';

import { Global, ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/global';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyle} />
          <div
            style={{
              width: '43rem',
              height: '90dvh',
              padding: '2rem',
              border: '1px solid black',
            }}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
