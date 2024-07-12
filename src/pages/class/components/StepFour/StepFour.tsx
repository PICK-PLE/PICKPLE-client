import { Button, ProgressBar } from '@components';
import {
  footerStyle,
  headerSpanStyle,
  headerStyle,
  imageStyle,
  layoutStyle,
  mainStyle,
  subTitleStyle,
  titleStyle,
} from './StepFour.style';
import { ClassPostFinishPng } from '@image';

const StepFour = () => {
  return (
    <>
      <ProgressBar progress={100} />
      <div css={layoutStyle}>
        <header css={headerStyle}>
          <h4 css={titleStyle}>클래스 모임 개설</h4>
          <h1 css={subTitleStyle}>질문을 만들어 주세요</h1>
          <span css={headerSpanStyle}>
            [마이페이지] &gt; [my 클래스 모임]에서
            <br />
            개설한 모임을 관리할 수 있어요.
          </span>
        </header>
        <main css={mainStyle}>
          <img src={ClassPostFinishPng} css={imageStyle} />
        </main>
        <footer css={footerStyle}>
          <Button variant="large">개설한 모임 보러가기</Button>
        </footer>
      </div>
    </>
  );
};

export default StepFour;
