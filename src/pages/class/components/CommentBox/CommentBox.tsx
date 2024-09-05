import { Image } from '@components';
import {
  commentContainer,
  commentContent,
  commentSectionContainer,
  commentTime,
  commentWrapper,
  iconStyle,
  profileImageWrapper,
  userNickname,
} from './CommentBox.style';
import { IcParkMore } from '@svg';

interface CommentBoxProps {}

const CommentBox = ({}: CommentBoxProps) => {
  return (
    <article css={commentSectionContainer}>
      <div css={commentContainer}>
        <div css={profileImageWrapper}>
          <Image variant="round" src="https://picsum.photos/200" width="4.2rem" />
        </div>
        <section css={commentWrapper}>
          <p css={userNickname}>Jay</p>
          <div css={commentContent}>클래스 참여에 별도의 준비물이 필요할까요?</div>
          <div css={commentTime}>3시간 전</div>
        </section>

        <div css={iconStyle}>
          <IcParkMore />
        </div>
      </div>
    </article>
  );
};

export default CommentBox;
