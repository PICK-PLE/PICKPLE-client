import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const applicantAccordionLayout = css`
  ${flexGenerator('column', 'center', 'center')};
  gap: 2rem;
`;

/* 체크 및 신청자 정보 <--space-between--> 아코디언 버튼  */
export const applicantLayoutStyle = css`
  ${flexGenerator('row', 'space-between', 'center')}
`;

/* 체크박스 <---> 신청자 정보*/
export const applicantContainerStyle = css`
  ${flexGenerator()}
  gap: 1.3rem;
`;

/* 체크박스 스타일 및 커스텀 */
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
  min-width: 18.4rem;
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
export const accodionStyle = css`
  width: 4.8rem;
  height: 4.8rem;
`;

export const accodionButtonStyle = css`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

/* 아코디언 div */
export const accdionContentWrapperStyle = css`
  ${flexGenerator('column', 'center', 'center')}
  gap: 2rem;
`;

export const accdionContentStyle = css`
  ${flexGenerator('column', 'center', 'center')}
  gap: 1rem;
`;

/* 질문 div (QuestionText로 대체 예정) */
export const questionStyle = (theme: Theme) => css`
  min-width: 33.5rem;
  height: 6.4rem;
  padding: 1rem;
  background-color: ${theme.color.purple5};
  border-radius: 10px;
  ${theme.font['body01-r-15']}
`;

/* 대답 div */
export const answerStyle = (theme: Theme) => css`
  min-width: 33.5rem;
  min-height: 17.6rem;
  padding: 1.2rem;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.lightgray1};
  border-radius: 10px;
  ${theme.font['body01-r-15']}
`;
