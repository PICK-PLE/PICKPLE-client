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

  cursor: pointer;
`;

export const customInputStyle = (theme: Theme) => css`
  padding: 3.2rem 1.6rem 1rem;

  width: 100%;
  height: 6.3rem;

  border: 1px solid ${theme.color.lightgray1};
  border-radius: 10px;

  ${theme.font['body01-r-15']};
  color: ${theme.color.midgray1};

  cursor: pointer;
`;

export const iconStyle = css`
  width: 1.3rem;
  height: 0.7rem;

  position: absolute;
  top: 50%;
  right: 1.7rem;

  cursor: pointer;
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

  & .react-datepicker {
    width: 300px;
    height: 200px;

    font-size: 1.4rem;

    & .react-datepicker__month-container {
      width: 100%;
      height: 100%;

      & .react-datepicker__current-month {
        font-size: 1.6rem;
      }

      & .react-datepicker__day-names {
        display: flex;
        justify-content: space-evenly;

        margin-top: 1rem;
      }

      & .react-datepicker__month {
        height: calc(100% - 6.5rem);

        ${flexGenerator('column', 'space-evenly')};

        & .react-datepicker__week {
          width: 100%;
          ${flexGenerator('row', 'space-evenly')};

          & .react-datepicker__day {
            ${flexGenerator()};

            width: 2.4rem;
            height: 2rem;
          }
        }
      }
    }
  }
`;
