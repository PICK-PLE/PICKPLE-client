import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { Button, ProgressBar } from '@components';
import { graphicImage } from '@constants';
import { useEasyNavigate } from '@hooks';
import { moimIdAtom } from 'src/stores/classPostData';

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

const StepFour = () => {
  const [moimId] = useAtom(moimIdAtom);
  const navigate = useNavigate();
  const { goHostMyPage } = useEasyNavigate();

  const handleButtonClick = () => {
    if (moimId > 0) {
      navigate(`/class/${moimId}`);
    } else {
      goHostMyPage();
    }
  };
  return (
    <>
      <ProgressBar progress={100} />
      <div css={layoutStyle}>
        <header css={headerStyle}>
          <h4 css={titleStyle}>클래스 모임 개설</h4>
          <h1 css={subTitleStyle}>클래스 개설이 완료되었어요!</h1>
          <span css={headerSpanStyle}>
            [마이페이지] &gt; [my 클래스 모임]에서
            <br />
            개설한 클래스를 관리할 수 있어요.
          </span>
        </header>
        <main css={mainStyle}>
          <img src={graphicImage.HostClassOpenImage} css={imageStyle} />
        </main>
        <footer css={footerStyle}>
          <Button variant="large" onClick={handleButtonClick}>
            개설한 클래스 보러가기
          </Button>
        </footer>
      </div>
    </>
  );
};

export default StepFour;
