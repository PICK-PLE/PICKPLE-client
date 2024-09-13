import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const profileWrapperStyle = css`
  ${flexGenerator('row', 'flex-start', 'center')}
  gap: 1rem;
`;
export const profileWrapperSizeStyle = {
  xlarge: css`
    gap: 2rem;
  `,
  large: css`
    gap: 1.2rem;
  `,
  medium: css`
    gap: 1rem;
  `,
  small: css`
    gap: 0.5rem;
  `,
};

export const imgStyle = css`
  width: 4.2rem;
  height: 4.2rem;

  border-radius: 100%;
  object-fit: cover;
`;

export const imgSizeStyle = {
  xlarge: css`
    width: 6rem;
    height: 6rem;
  `,
  large: css`
    width: 4.2rem;
    height: 4.2rem;
  `,
  medium: css`
    width: 2.5rem;
    height: 2.5rem;
  `,
  small: css`
    width: 1.8rem;
    height: 1.8rem;
  `,
};

export const usernameStyle = (theme: Theme) => css`
  color: ${theme.color.blackgray};
`;

export const usernameSizeStyle = {
  xlarge: (theme: Theme) => css`
    color: ${theme.color.black};
    ${theme.font['head03-b-18']};
  `,
  large: (theme: Theme) => css`
    ${theme.font['subhead04-sb-15']}
  `,
  medium: (theme: Theme) => css`
    ${theme.font['subhead05-sb-14']}
  `,
  small: (theme: Theme) => css`
    ${theme.font['body04-m-12']}
  `,
};
