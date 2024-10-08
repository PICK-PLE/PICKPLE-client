import { graphicImage } from '@constants';

import { emptyReviewContainer, imageStyle, textStyle } from './ClassNoticeEmptyView.style';

const ClassNoticeEmptyView = () => {
  return (
    <article>
      <div css={emptyReviewContainer}>
        <img css={imageStyle} src={graphicImage.NoticeImage} alt="notice graphics" />
        <p css={textStyle}>아직 등록된 공지 사항이 없어요</p>
      </div>
    </article>
  );
};

export default ClassNoticeEmptyView;
