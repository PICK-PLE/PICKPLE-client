import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const customInputContainer = css`
  position: relative;
`;

export const customInputLabel = (theme: Theme) => css`
  ${flexGenerator()};
  height: 1.7rem;
  position: absolute;
  top: 1.1rem;
  left: 1.7rem;

  ${theme.font['body03-r-12']};
  color: ${theme.color.midgray1};
`;

export const customInputStyle = (theme: Theme) => css`
  padding: 3.2rem 1.6rem 1rem;

  width: 100%;
  height: 6.3rem;

  border: 1px solid ${theme.color.lightgray1};
  border-radius: 10px;

  ${theme.font['body01-r-15']};
  color: ${theme.color.midgray1};
`;

export const DataPickerWrapper = css`
  width: 100%;
  height: 6.3rem;

  & .react-datepicker-wrapper {
    width: 100%;
    & .react-datepicker__input-container {
      width: 100%;
    }
  }
`;
