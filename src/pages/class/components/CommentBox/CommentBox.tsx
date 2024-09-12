import { useState } from 'react';

import { Image } from '@components';
import { useClickOutside } from '@hooks';
import { IcParkMore, IcSpickerMark } from '@svg';
import { formatCreatedDate } from '@utils';

import {
  commentContainer,
  commentContent,
  commentSectionContainer,
  commentTime,
  commentWrapper,
  iconStyle,
  iconWrapper,
  profileImageWrapper,
  profileWrapper,
  spickerIconStyle,
  userNickname,
} from './CommentBox.style';
import DeleteCard from '../DeleteCard/DeleteCard';

import { components } from '@schema';

type comment = components['schemas']['CommentGetResponse'];
interface CommentBoxProps {
  comment: comment;
}

const CommentBox = ({ comment }: CommentBoxProps) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const deleteCardRef = useClickOutside<HTMLDivElement>(() => {
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
  };

  return (
    <article css={commentSectionContainer}>
      <div css={commentContainer(comment.isOwner ?? false)}>
        <div css={profileImageWrapper}>
          <Image variant="round" src={comment.commenterImageUrl ?? ''} width="4.2rem" />
        </div>
        <section css={commentWrapper}>
          <div css={profileWrapper}>
            <p css={userNickname}>{comment.commenterNickname}</p>
            {comment.isOwner && (
              <span css={spickerIconStyle}>
                <IcSpickerMark />
              </span>
            )}
          </div>
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
