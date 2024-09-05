import { Button, Header } from '@components';
import { graphicImage } from '@constants';

import {
  bigSpan,
  buttonSectionStyle,
  imgSectionStyle,
  imgStyle,
  purpleTextStyle,
  reviewCompleteContainer,
  reviewCompleteLayout,
  smallSpan,
  textSectionStyle,
} from './GuestMyClassReviewComplete.style';

const GuestMyClassReviewComplete = () => {
  return (
    <div css={reviewCompleteLayout}>
      <Header title="리뷰 쓰기" />
      <div css={reviewCompleteContainer}>
        <section css={textSectionStyle}>
          <span css={purpleTextStyle}>작성 완료</span>
          <span css={bigSpan}>리뷰 작성이 완료되었어요!</span>
          <span css={smallSpan}>경험을 공유해 주셔서 감사해요.</span>
        </section>
        <section css={imgSectionStyle}>
          <img src={graphicImage.ReviewFinishImage} alt="리뷰 작성 완료" css={imgStyle} />
        </section>
        <section css={buttonSectionStyle}>
          <Button variant="large" onClick={() => {}}>
            작성한 리뷰 보러 가기
          </Button>
        </section>
      </div>
    </div>
  );
};

export default GuestMyClassReviewComplete;
