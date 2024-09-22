import { graphicImage } from '@constants';

import { emptyReviewContainer, imageStyle, textStyle } from './HostInfoReviewEmptyView.style';

const HostInfoReviewEmptyView = () => {
  return (
    <article>
      <div css={emptyReviewContainer}>
        <img css={imageStyle} src={graphicImage.ReviewEmptyImage} alt="review graphics" />
        <p css={textStyle}>아직 작성된 리뷰가 없어요</p>
      </div>
    </article>
  );
};

export default HostInfoReviewEmptyView;
