import { Button, ProgressBar } from '@components';
import { graphicImage } from '@constants';
import { useEasyNavigate } from '@hooks';

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

const StepThree = () => {
  const { goCategories } = useEasyNavigate();
  return (
    <>
      <ProgressBar progress={100} />
      <div css={layoutStyle}>
        <header css={headerStyle}>
          <h4 css={titleStyle}>신청 완료</h4>
          <h1 css={subTitleStyle}>스픽커 신청이 완료되었어요!</h1>
          <span css={headerSpanStyle}>
            스픽커 승인은 영업일 기준 3~5일 이내에
            <br />
            메일을 통해 안내해 드릴 예정이에요.
          </span>
        </header>
        <main css={mainStyle}>
          <img src={graphicImage.HostApplyFinishImage} alt="호스트 승인 완료" css={iconStyle} />
        </main>
        <footer css={footerStyle}>
          <Button variant="large" onClick={goCategories}>
            다른 클래스 둘러보기
          </Button>
        </footer>
      </div>
    </>
  );
};

export default StepThree;
