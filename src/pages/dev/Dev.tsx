import { Modal, PayButton } from '@components';
import { useState } from 'react';

const Dev = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalOpen = () => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleModalOpen}>모달 열기</button>
      {isOpen && (
        <Modal onClose={handleModalClose}>
          {/* 예시로 PayButton을 넣어봤습니다 */}
          <PayButton variant="toss" totalPrice={10000} />
        </Modal>
      )}
    </>
  );
};

export default Dev;
