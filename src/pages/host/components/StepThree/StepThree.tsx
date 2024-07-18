import { Button, ProgressBar } from '@components';
import {
  footerStyle,
  headerSpanStyle,
  headerStyle,
  iconStyle,
  layoutStyle,
  mainStyle,
  subTitleStyle,
  titleStyle,
} from './StepThree.style';
import { graphicImage } from '@constants';
import { useEasyNavigate } from '@hooks';

const StepThree = () => {
  const { goHome } = useEasyNavigate();
  return (
    <>
      <ProgressBar progress={100} />
      <div css={layoutStyle}>
        <header css={headerStyle}>
          <h4 css={titleStyle}>신청 완료</h4>
          <h1 css={subTitleStyle}>호스트 신청이 완료되었어요!</h1>
          <span css={headerSpanStyle}>
            호스트 승인 결과는 영업일 기준 3~5일 이내에
            <br />
            메일을 통해 안내해 드릴 예정이에요.
          </span>
        </header>
        <main css={mainStyle}>
          <img src={graphicImage.HostApplyFinishImage} alt="호스트 승인 완료" css={iconStyle} />
        </main>
        <footer css={footerStyle}>
          <Button variant="large" onClick={goHome}>
            다른 모임 둘러보기
          </Button>
        </footer>
      </div>
    </>
  );
};

export default StepThree;
