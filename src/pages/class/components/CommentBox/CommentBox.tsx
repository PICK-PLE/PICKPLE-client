import { Image } from '@components';
import {
  commentContainer,
  commentContent,
  commentSectionContainer,
  commentTime,
  commentWrapper,
  iconStyle,
  iconWrapper,
  profileImageWrapper,
  userNickname,
} from './CommentBox.style';
import { IcParkMore } from '@svg';
import { components } from '@schema';
import { formatCreatedDate } from '@utils';
import DeleteCard from '../DeleteCard/DeleteCard';
import { useState } from 'react';
import { useClickOutside } from '@hooks';

type comment = components['schemas']['CommentGetResponse'];
interface CommentBoxProps {
  comment: comment;
}

const CommentBox = ({ comment }: CommentBoxProps) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const deleteCardRef = useClickOutside(() => {
    setIsDeleteOpen(false);
    handleModalClose();
  });

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleIconClick = () => {
    setIsDeleteOpen((prev) => !prev);
    // setIsModalOpen(false);
  };

  return (
    <article css={commentSectionContainer}>
      <div css={commentContainer}>
        <div css={profileImageWrapper}>
          <Image variant="round" src={comment.commenterImageUrl ?? ''} width="4.2rem" />
        </div>
        <section css={commentWrapper}>
          <p css={userNickname}>{comment.commenterNickname}</p>
          <div css={commentContent}>{comment.commentContent}</div>
          <div css={commentTime}>{formatCreatedDate(comment.commentDate ?? '')}시간 전</div>
        </section>
        <div css={iconWrapper}>
          <span css={iconStyle}>
            <IcParkMore onClick={handleIconClick} />
            {isDeleteOpen && (
              <div ref={deleteCardRef}>
                <DeleteCard
                  isModalOpen={isModalOpen}
                  handleModalClose={handleModalClose}
                  handleModalOpen={handleModalOpen}
                />
              </div>
            )}
          </span>
        </div>
      </div>
    </article>
  );
};

export default CommentBox;
