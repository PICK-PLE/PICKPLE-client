import { graphicImage } from '@constants';

import { emptyReviewContainer, imageStyle, textStyle } from './ClassReviewEmptyView.style';

const ClassReviewEmptyView = () => {
  return (
    <article>
      <div css={emptyReviewContainer}>
        <img css={imageStyle} src={graphicImage.ReviewImage} alt="review graphics" />
        <p css={textStyle}>아직 작성된 리뷰가 없습니다</p>
      </div>
    </article>
  );
};

export default ClassReviewEmptyView;
