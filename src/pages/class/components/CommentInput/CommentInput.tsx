import { IcSend } from '@svg';
import {
  inputStyle,
  commentInputContainer,
  commentInputWrapper,
  iconStyle,
} from './CommentInput.style';

const CommentInput = () => {
  return (
    <div css={commentInputContainer}>
      <div css={commentInputWrapper}>
        <input css={inputStyle} placeholder="댓글을 남겨보세요" />
      </div>
      <div css={iconStyle}>
        <IcSend />
      </div>
    </div>
  );
};

export default CommentInput;
