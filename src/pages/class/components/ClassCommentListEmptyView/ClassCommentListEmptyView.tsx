import { IcCommentListEmpty } from '@svg';

import { emptyViewContainer, iconStyle, textStyle } from './ClassCommentListEmptyView.style';

const ClassCommentListEmptyView = () => {
  return (
    <div css={emptyViewContainer}>
      <span css={iconStyle}>
        <IcCommentListEmpty />
      </span>
      <div>
        <p css={textStyle}>아직 작성된 댓글이 없어요.</p>
      </div>
    </div>
  );
};

export default ClassCommentListEmptyView;
