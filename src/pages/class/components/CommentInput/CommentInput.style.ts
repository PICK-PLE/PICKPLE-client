import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const commentInputContainer = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start', 'center')};
  width: 100%;
  max-width: 43rem;
  padding: 1rem 2rem 1.1rem 2.1rem;

  gap: 1.4rem;

  border-top: 1px solid ${theme.color.lightgray1};
  background: ${theme.color.white};
  position: fixed;
  bottom: 0;
`;

export const commentInputWrapper = css`
  ${flexGenerator('row', 'space-between', 'center')};
  width: 100%;
`;

export const inputStyle = (theme: Theme) => css`
  ${flexGenerator('row', 'center', 'center')};
  display: flex;
  width: 100%;
  padding: 1.2rem 1.5rem;
  gap: 1rem;

  border-radius: 10px;
  background: ${theme.color.lightgray0};
  border: none;

  ::placeholder {
    color: ${theme.color.midgray1};

    /* @정안todo font 추가 body/body06-m-15 */
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 21px */
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
`;
