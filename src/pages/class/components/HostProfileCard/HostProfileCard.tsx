import { useState } from 'react';

import { Image, Label } from '@components';
import { useClickOutside } from '@hooks';
import { IcLock, IcParkMore } from '@svg';

import {
  iconStyle,
  iconWrapper,
  profileContainer,
  profileName,
  profilePosition,
  profileTextBox,
  profileWrapper,
} from './HostProfileCard.style';
import DeleteCard from '../DeleteCard/DeleteCard';

import { components } from '@schema';

type NoticeListGetByMoimResponse = components['schemas']['NoticeDetailGetResponse'];
interface HostProfileCardProps {
  data: NoticeListGetByMoimResponse;
}

const HostProfileCard = ({ data: noticeDetail }: HostProfileCardProps) => {
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
    <div css={profileContainer}>
      <section css={profileWrapper}>
        {/* @정안TODO Image src 교체 */}
        <Image
          width="4.2rem"
          src="https://pickple-bucket.s3.ap-northeast-2.amazonaws.com/profile/guestProfileImage.png"
        />
        <div css={profileTextBox}>
          <span css={profilePosition}>스픽커</span>
          <span css={profileName}>{noticeDetail?.hostNickname}</span>
        </div>
      </section>
      <div css={iconWrapper}>
        {noticeDetail.isOwner === true ? (
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
        ) : (
          <div>
            <Label variant="category" icon={<IcLock />}>
              게스트
            </Label>
          </div>
        )}
      </div>
    </div>
  );
};

export default HostProfileCard;
