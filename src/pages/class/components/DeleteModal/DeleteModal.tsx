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
}

const DeleteModal = ({ onClose }: DeleteModalProps) => {
  return (
    <article css={deleteModalContainer}>
      <div css={deleteModalWrapper}>
        <div css={detailWrapper}>
          <p css={title}>삭제하시겠습니까?</p>
          <div css={buttonWrapper}>
            <Button variant="xSmall" onClick={onClose} customStyle={cancelButtonStyle}>
              <p css={cancelButtonText}>취소</p>
            </Button>
            <Button variant="xSmall" onClick={() => {}} customStyle={deleteButtonStyle}>
              <p css={deleteButtonText}>삭제</p>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DeleteModal;
