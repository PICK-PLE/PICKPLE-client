import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const thumbnailStyle = (theme: Theme) => css`
  ${flexGenerator()};
  flex-shrink: 0;
  width: 7rem;
  height: 7rem;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${theme.color.lightgray1};
`;

export const labelStyle = css`
  ${flexGenerator()};
  width: 7rem;
  height: 7rem;
  border-radius: 10px;
  cursor: pointer;
`;

export const inputStyle = css`
  display: none;
`;

export const imageSelectWrapper = css`
  ${flexGenerator('row', 'flex-start', 'center')}
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem;
  border-radius: 10px;

  & > label {
    flex-shrink: 0;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const previewImageStyle = css`
  width: 7rem;
  height: 7rem;
  border-radius: 10px;
`;

export const iconStyle = css`
  ${flexGenerator()};

  width: 3rem;
  height: 3rem;
  border-radius: 10px;
`;

export const previewUrlsWrapper = css`
  ${flexGenerator()}
  gap: 1rem;
`;
