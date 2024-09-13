import { useDeleteNoticeComment } from '@apis/domains/notice/useDeleteNoticeComment';

import { Button } from '@components';

import {
  buttonWrapper,
  cancelButtonStyle,
  cancelButtonText,
  deleteButtonStyle,
  deleteButtonText,
  deleteModalContainer,
  deleteModalWrapper,
  detailWrapper,
  title,
} from './DeleteModal.style';

interface DeleteModalProps {
  onClose: () => void;
  commentId?: number;
  noticeId?: string | undefined;
}

const DeleteModal = ({ onClose, noticeId, commentId }: DeleteModalProps) => {
  const { mutate: deleteComment } = useDeleteNoticeComment();
  const handleButtonClick = () => {
    if (noticeId && commentId !== undefined) {
      deleteComment({ noticeId: noticeId.toString(), commentId: commentId.toString() });
      onClose();
    } else {
      console.error('댓글을 삭제하는데 에러가 발생했습니다.');
      alert('댓글을 삭제하는데 에러가 발생했습니다.');
    }
  };

  return (
    <article css={deleteModalContainer}>
      <div css={deleteModalWrapper}>
        <div css={detailWrapper}>
          <p css={title}>삭제하시겠습니까?????</p>
          <div css={buttonWrapper}>
            <Button variant="xSmall" onClick={onClose} customStyle={cancelButtonStyle}>
              <p css={cancelButtonText}>취소</p>
            </Button>
            <Button variant="xSmall" onClick={handleButtonClick} customStyle={deleteButtonStyle}>
              <p css={deleteButtonText}>삭제</p>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DeleteModal;
