import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

//테스트를 위해 컴포넌트 끼리의 간격만을 조정하기 위한 스타일입니다.
export const payButtonsStyle = () => css`
  ${flexGenerator()}
  padding: 1rem 0;
`;

export const socialLoginButtonStyle = () => css`
  padding: 1rem 0;
`;

export const simpleUserProfileStyle = () => css`
  padding: 1rem 0;
`;
