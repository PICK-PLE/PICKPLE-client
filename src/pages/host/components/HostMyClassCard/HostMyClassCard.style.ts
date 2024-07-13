import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const cardContainer = (theme: Theme) => css`
  ${flexGenerator('column')};
  gap: 1.3rem;

  padding: 1.8rem 1.8rem 1.3rem;

  border-radius: 10px;

  background: ${theme.color.white};
`;

export const cardContent = css`
  ${flexGenerator('row', 'flex-start')};
  gap: 1.5rem;

  width: 100%;
`;

export const cardText = css`
  ${flexGenerator('column', 'center', 'flex-start')};

  flex: 1;
  gap: 0.8rem;

  padding-top: 0.3rem;
  padding-bottom: 0.4rem;
`;

export const cardTitleWrapper = css`
  ${flexGenerator('row', 'space-between')};
  gap: 0.6rem;
  width: 100%;

  cursor: pointer;
`;

export const cardTitle = (theme: Theme) => css`
  ${theme.font['subhead04-sb-15']};
  color: ${theme.color.black};
`;

export const cardIcon = css`
  width: 2.4rem;
  height: 2.4rem;
`;
