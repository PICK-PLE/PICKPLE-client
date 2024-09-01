import { graphicImage } from '@constants';

import { emptyReviewContainer, imageStyle, textStyle } from './ClassNoticeEmptyView.style';

const ClassNoticeEmptyView = () => {
  return (
    <article>
      <div css={emptyReviewContainer}>
        <img css={imageStyle} src={graphicImage.NoticeImage} alt="notice graphics" />
        <p css={textStyle}>아직 등록된 공지사항이 없습니다</p>
      </div>
    </article>
  );
};

export default ClassNoticeEmptyView;
