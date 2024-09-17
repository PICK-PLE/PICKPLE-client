import { useState } from 'react';

import { Image, Label, Modal } from '@components';
import { IcLock, IcParkMore, IcSpickerMark } from '@svg';

import {
  iconStyle,
  iconWrapper,
  profileContainer,
  profileName,
  profileNameWrapper,
  profilePosition,
  profileTextBox,
  profileWrapper,
  spickerIconStyle,
} from './HostProfileCard.style';
import DeleteCard from '../DeleteCard/DeleteCard';
import DeleteNoticeModal from '../DeleteNoticeModal/DeleteNoticeModal';

import { components } from '@schema';

type NoticeListGetByMoimResponse = components['schemas']['NoticeDetailGetResponse'];
interface HostProfileCardProps {
  data: NoticeListGetByMoimResponse;
  noticeId: string;
  moimId: string;
}

const HostProfileCard = ({ data: noticeDetail, noticeId, moimId }: HostProfileCardProps) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div css={profileContainer}>
      <section css={profileWrapper}>
        {/* @정안TODO Image src 교체 */}
        <Image width="4.2rem" src={noticeDetail.hostImageUrl ?? ''} variant="round" />
        <div css={profileTextBox}>
          <span css={profilePosition}>스픽커</span>
          <div css={profileNameWrapper}>
            <span css={profileName}>{noticeDetail?.hostNickname}</span>
            <span css={spickerIconStyle}>
              <IcSpickerMark />
            </span>
          </div>
        </div>
      </section>
      <div css={iconWrapper}>
        {noticeDetail.isPrivate === false ? (
          <span css={iconStyle}>
            <IcParkMore onClick={handleDeleteOpen} />
            {isDeleteOpen && (
              <DeleteCard handleModalOpen={handleModalOpen} handleDeleteClose={handleDeleteClose} />
            )}
            {isModalOpen && (
              <Modal onClose={handleModalClose}>
                <DeleteNoticeModal onClose={handleModalClose} noticeId={noticeId} moimId={moimId} />
              </Modal>
            )}
          </span>
        ) : (
          <Label variant="category" icon={<IcLock />}>
            참가자
          </Label>
        )}
      </div>
    </div>
  );
};

export default HostProfileCard;
