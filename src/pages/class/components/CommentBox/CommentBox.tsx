import { useAtom } from 'jotai';
import { useState } from 'react';

import { Image, Modal } from '@components';
import { userAtom } from '@stores';
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
import DeleteModal from '../DeleteModal/DeleteModal';

import { components } from '@schema';

type comment = components['schemas']['CommentGetResponse'];
interface CommentBoxProps {
  comment: comment;
  noticeId: string;
  host: boolean | undefined;
}

const CommentBox = ({ comment, noticeId, host }: CommentBoxProps) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user] = useAtom(userAtom);

  const handleDeleteOpen = () => {
    setIsDeleteOpen(true);
  };
  const handleDeleteClose = () => {
    setIsDeleteOpen(false);
  };

  const handleModalOpen = () => {
    handleDeleteClose();
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const canShowIcon = host || comment.commenterNickname === user.guestNickname;

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
          <div css={commentTime}>{formatCreatedDate(comment.commentDate ?? '')}</div>
        </section>

        {canShowIcon && (
          <div css={iconWrapper}>
            <IcParkMore onClick={handleDeleteOpen} css={iconStyle} width={24} height={24} />
            {isDeleteOpen && (
              <DeleteCard handleModalOpen={handleModalOpen} handleDeleteClose={handleDeleteClose} />
            )}
            {isModalOpen && (
              <Modal onClose={handleModalClose}>
                <DeleteModal
                  onClose={handleModalClose}
                  commentId={comment.commentId ?? 0}
                  noticeId={noticeId ?? ''}
                />
              </Modal>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default CommentBox;
