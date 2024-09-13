import { backdropStyle, deleteCardWrapper } from './DeleteCard.style';

interface DeleteCardProps {
  handleModalOpen: () => void;
  handleDeleteClose: () => void;
}
const DeleteCard = ({ handleModalOpen, handleDeleteClose }: DeleteCardProps) => {
  return (
    <>
      <div css={backdropStyle} onClick={handleDeleteClose} />
      <div css={deleteCardWrapper} onClick={handleModalOpen}>
        삭제하기
      </div>
    </>
  );
};

export default DeleteCard;
