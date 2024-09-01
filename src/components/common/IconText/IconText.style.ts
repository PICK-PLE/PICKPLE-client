import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const IconTextContainer = css`
  ${flexGenerator('row', 'flex-start')};
  gap: 1rem;
`;

export const iconWrapper = css`
  width: 2.4rem;
  height: 2.4rem;
`;

export const textStyle = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start', 'center')};

  ${theme.font['body02-r-14']};
`;
