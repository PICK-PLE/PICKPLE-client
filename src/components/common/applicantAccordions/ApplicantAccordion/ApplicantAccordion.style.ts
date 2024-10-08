import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const applicantAccordionLayout = css`
  ${flexGenerator('column')};
  gap: 2rem;
  width: 100%;
`;

export const applicantLayoutStyle = css`
  ${flexGenerator('row', 'space-between')};
  gap: 0.2rem;
  width: 100%;
`;

export const applicantContainerStyle = css`
  ${flexGenerator('row')}
  gap: 1.3rem;
`;

export const checkboxStyle = css`
  display: none;
`;

export const customCheckboxStyle = () => css`
  width: 3rem;
  height: 3rem;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

/* 신청자 정보 */
export const applicantWrapperStyle = css`
  ${flexGenerator()}
  gap: 1rem;
`;

export const applicnatImgStyle = css`
  width: 4.8rem;
  height: 4.8rem;
`;

export const applicantInfoStyle = css`
  ${flexGenerator('column', 'center', 'flex-start')}
  gap: 0.4rem;
`;

export const applicantNameStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head04-b-16']};
`;

export const applyDateStyle = (theme: Theme) => css`
  color: ${theme.color.midgray1};
  ${theme.font['body04-m-12']};
`;

/* 아코디언 아이콘 및 버튼 */
export const accodionStyle = (isAccordionOpen: boolean) => (theme: Theme) => css`
  width: 4.8rem;
  height: 4.8rem;
  transform: ${isAccordionOpen ? 'rotateX(180deg)' : 'rotateX(0deg)'};

  path {
    stroke: ${theme.color.midgray1};
  }
`;

export const accodionButtonStyle = css`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

/* 아코디언 div */
export const accdionContentWrapperStyle = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 2rem;
  width: 100%;
`;

export const accdionContentStyle = css`
  ${flexGenerator('column')}
  gap: 1rem;
  width: 100%;
`;

/* 대답 div */
export const answerStyle = (theme: Theme) => css`
  width: 100%;
  min-height: 17.6rem;
  padding: 1.2rem;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.lightgray1};
  border-radius: 10px;
  ${theme.font['body01-r-15']}
`;
