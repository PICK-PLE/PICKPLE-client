import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const thumbnailStyle = (theme: Theme) => css`
  ${flexGenerator()};
  flex-shrink: 0; /* 이미지가 줄어들지 않도록 설정 */
  width: 7rem;
  height: 7rem;
  border-radius: 10px;
  cursor: pointer;

  background-color: ${theme.color.lightgray1};
`;

export const inputStyle = css`
  display: none;
`;

export const imageSelectWrapper = css`
  display: flex;
  flex-direction: row; /* 가로로 나열 */
  gap: 1rem; /* 이미지 간 간격 */
  overflow-x: auto; /* 가로 스크롤 */
  padding: 1rem;
  border-radius: 10px;

  & > label {
    display: flex;
    flex-shrink: 0; /* 자식 요소가 줄어들지 않도록 설정 */
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

export const IconStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 10px;
`;
