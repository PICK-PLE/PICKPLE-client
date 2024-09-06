import { deleteCardContainer, deleteCardWrapper, deleteText } from './DeleteCard.style';
import { Modal } from '@components';
import DeleteModal from '../DeleteModal/DeleteModal';

interface DeleteCardProps {
  isModalOpen: boolean;
  handleModalClose: () => void;
  handleModalOpen: () => void;
}
const DeleteCard = ({ isModalOpen, handleModalClose, handleModalOpen }: DeleteCardProps) => {
  return (
    <div css={deleteCardContainer} onClick={handleModalOpen}>
      <div css={deleteCardWrapper}>
        <p css={deleteText}>삭제하기</p>
      </div>
      {isModalOpen && (
        <>
          <Modal onClose={handleModalClose}>
            <DeleteModal onClose={handleModalClose} />
          </Modal>
        </>
      )}
    </div>
  );
};

export default DeleteCard;
