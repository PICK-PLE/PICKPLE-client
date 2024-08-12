import { Button, Notice } from '@components';

import {
  ruleArticleLayout,
  ruleWrapperStyle,
  ruleMainStyle,
  ruleSpanStyle,
  ruleHStyle,
  ruleFooterStyle,
  headerStyle,
} from './ClassApplyRule.style';

export interface ClassApplyProps {
  handlePageChange: () => void;
}

const ClassApplyRule = ({ handlePageChange }: ClassApplyProps) => {
  const handleButtonClick = () => {
    handlePageChange();
  };

  return (
    <>
      <article css={ruleArticleLayout}>
        <div css={ruleWrapperStyle}>
          <header css={headerStyle}>
            <span css={ruleSpanStyle}>클래스 모임 신청</span>
            <h1 css={ruleHStyle}>
              모두가 즐거운 모임이 될 수 있도록 <br /> 꼭 확인해 주세요!
            </h1>
          </header>

          <main css={ruleMainStyle}>
            <Notice numberLabel="1">
              모임참여 전, 호스트가 게시하는 <br /> 공지사항을 꼼꼼히 확인해주세요.
            </Notice>
            <Notice numberLabel="2">
              무단으로 불참하거나, 함께하는 이들에게
              <br /> 피해를 주는 경우 이용 제재를 받게 돼요.
            </Notice>
            <Notice numberLabel="3">
              서로에게 유익한 시간이 되도록 <br /> 열정적인 태도로 임해주세요.
            </Notice>
          </main>
        </div>

        <footer css={ruleFooterStyle}>
          <Button variant="large" onClick={handleButtonClick}>
            다음
          </Button>
        </footer>
      </article>
    </>
  );
};

export default ClassApplyRule;
