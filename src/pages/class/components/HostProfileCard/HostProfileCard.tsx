import { Image } from '@components';
import {
  iconStyle,
  iconWrapper,
  profileContainer,
  profileName,
  profilePosition,
  profileTextBox,
  profileWrapper,
} from './HostProfileCard.style';
import { useState } from 'react';
import { IcParkMore } from '@svg';
import DeleteCard from '../DeleteCard/DeleteCard';
import { components } from '@schema';

type NoticeListGetByMoimResponse = components['schemas']['NoticeDetailGetResponse'];
interface HostProfileCardProps {
  data: NoticeListGetByMoimResponse;
}

const HostProfileCard = ({ data: noticeDetail }: HostProfileCardProps) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
    console.log('modalClose');
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
    console.log('modalOpen');
    console.log('isModalOpen', isModalOpen);
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
        <span css={iconStyle}>
          <IcParkMore onClick={handleIconClick} />
          {isDeleteOpen && (
            <DeleteCard
              isModalOpen={isModalOpen}
              handleModalClose={handleModalClose}
              handleModalOpen={handleModalOpen}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default HostProfileCard;
