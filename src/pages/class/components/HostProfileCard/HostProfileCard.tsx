import { useAtom } from 'jotai';
import { useState } from 'react';

import { Image, Label, Modal } from '@components';
import { userAtom } from '@stores';
import { IcLock, IcParkMore, IcSpickerMark, IcUnlock } from '@svg';

import {
  iconStyle,
  iconWrapper,
  profileContainer,
  profileIconWrapper,
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
  const [user] = useAtom(userAtom);

  const handleDeleteOpen = () => setIsDeleteOpen(true);
  const handleDeleteClose = () => setIsDeleteOpen(false);

  const handleModalOpen = () => {
    handleDeleteClose();
    setIsModalOpen(true);
  };
  const handleModalClose = () => setIsModalOpen(false);

  const renderLabel = () => {
    if (noticeDetail.isPrivate) {
      return (
        <Label variant="category" icon={<IcLock />}>
          참가자
        </Label>
      );
    }
    return (
      <Label variant="category" icon={<IcUnlock />}>
        전체
      </Label>
    );
  };

  const renderDeleteCard = () => {
    return (
      isDeleteOpen && (
        <DeleteCard handleModalOpen={handleModalOpen} handleDeleteClose={handleDeleteClose} />
      )
    );
  };

  const renderModal = () => {
    return (
      isModalOpen && (
        <Modal onClose={handleModalClose}>
          <DeleteNoticeModal onClose={handleModalClose} noticeId={noticeId} moimId={moimId} />
        </Modal>
      )
    );
  };

  const renderProfileIcons = () => {
    const isHost = noticeDetail.hostNickname === user.hostNickname;
    if (isHost) {
      return (
        <div css={profileIconWrapper}>
          {renderLabel()}
          <span css={iconStyle}>
            <IcParkMore onClick={handleDeleteOpen} />
          </span>
          {renderDeleteCard()}
          {renderModal()}
        </div>
      );
    }

    if (!noticeDetail.isOwner && !noticeDetail.isPrivate) {
      return (
        <div css={profileIconWrapper}>
          <Label variant="category" icon={<IcUnlock />}>
            전체
          </Label>
        </div>
      );
    }

    if (noticeDetail.isPrivate) {
      return (
        <div css={profileIconWrapper}>
          <Label variant="category" icon={<IcLock />}>
            참가자
          </Label>
        </div>
      );
    }

    return null;
  };

  return (
    <div css={profileContainer}>
      <section css={profileWrapper}>
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
      <div css={iconWrapper}>{renderProfileIcons()}</div>
    </div>
  );
};

export default HostProfileCard;
