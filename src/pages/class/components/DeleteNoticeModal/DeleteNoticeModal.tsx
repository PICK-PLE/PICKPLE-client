import { useNavigate } from 'react-router-dom';

import { useDeleteNotice } from '@apis/domains/notice/useDeleteNotice';

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
} from './DeleteNoticeModal.style';

interface DeleteNoticeModalProps {
  onClose: () => void;
  noticeId?: string;
  moimId?: string;
}

const DeleteNoticeModal = ({ onClose, noticeId, moimId }: DeleteNoticeModalProps) => {
  const navigate = useNavigate();
  const { mutate: deleteNotice } = useDeleteNotice();
  const handleButtonClick = () => {
    if (noticeId !== undefined) {
      deleteNotice(noticeId);
      onClose();
      navigate(`/class/${moimId}`);
    } else {
      console.error('공지 사항을 삭제하는데 에러가 발생했습니다.');
      alert('공지 사항을 삭제하는데 에러가 발생했습니다.');
    }
  };

  return (
    <article css={deleteModalContainer}>
      <div css={deleteModalWrapper}>
        <div css={detailWrapper}>
          <p css={title}>삭제하시겠습니까?</p>
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
export default DeleteNoticeModal;
