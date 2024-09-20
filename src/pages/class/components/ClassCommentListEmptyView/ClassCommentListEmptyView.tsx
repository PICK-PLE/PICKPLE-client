import { graphicImage } from '@constants';

import { emptyViewContainer, iconStyle, textStyle } from './ClassCommentListEmptyView.style';

const ClassCommentListEmptyView = () => {
  return (
    <div css={emptyViewContainer}>
      <img css={iconStyle} src={graphicImage.CommentEmptyView} alt="댓글이 없어요" />

      <div>
        <p css={textStyle}>아직 작성된 댓글이 없어요</p>
      </div>
    </div>
  );
};

export default ClassCommentListEmptyView;
