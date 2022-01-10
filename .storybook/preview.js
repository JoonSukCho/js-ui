import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { GlobalStyle } from '../styles/global-style';
import { theme } from '../styles/theme';

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};
