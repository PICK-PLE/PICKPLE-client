import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const InterestCategoryButtonStyle = css`
  ${flexGenerator()}
  border: none;
`;

export const InterestCategoryButtonVariant = (theme: Theme) => ({
  default: css`
    display: flex;
    width: 10.7rem;
    height: 3.4rem;
    padding: 0.5rem 1rem;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    border-radius: 5px;
    background-color: ${theme.color.purple6};
    color: ${theme.color.purple2};
    ${theme.font['body03-r-12']}

    cursor: pointer;
  `,
});

export const iconWrapperStyle = css`
  width: 1.6rem;
  height: 1.6rem;
`;
