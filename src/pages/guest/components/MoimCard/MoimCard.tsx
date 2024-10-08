import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Image, Label, Modal } from '@components';
import { IcDropdownRight } from '@svg';
import { statusMapText } from 'src/constants/mappingText';

import {
  detailWrapper,
  detailInfoWrapper,
  moimCardContainer,
  iconStyle,
  titleStyle,
  titleWrapper,
  detailTitleWrapper,
  detailTitleStyle,
  detailInfoStyle,
  moimCardLayout,
  imageCustomStyle,
} from './MoimCard.style';
import DepositModal from '../DepositModal/DepositModal';

import { components } from '@schema';

type SubmittedMoimByGuestResponse = components['schemas']['SubmittedMoimByGuestResponse'];

interface MoimCardProps {
  guestMyClassData: SubmittedMoimByGuestResponse;
}

const MoimCard = ({ guestMyClassData }: MoimCardProps) => {
  const { moimSubmissionState, title, hostNickname, dateList, fee, imageUrl, moimId, isReviewed } =
    guestMyClassData;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  const handleCardClick = () => {
    navigate(`/class/${moimId}`);
  };
  const handleWriteReviewClick = () => {
    navigate(`/mypage/guest/myclass/${moimId}/review/write`);
  };
  const handleWatchReviewClick = () => {
    navigate(`/class/${moimId}`, { state: { tab: 'review' } });
  };

  return (
    <div css={moimCardLayout}>
      <article css={moimCardContainer}>
        <Image
          src={imageUrl ?? ''}
          width="11.2rem"
          label={
            moimSubmissionState !== 'completed' ? (
              <Label variant="status">{statusMapText[moimSubmissionState ?? '']}</Label>
            ) : null
          }
          customStyle={imageCustomStyle}
        />
        <article css={detailInfoWrapper}>
          <div css={titleWrapper} onClick={handleCardClick}>
            <p css={titleStyle}>{title}</p>
            <IcDropdownRight css={iconStyle} />
          </div>
          <div css={detailWrapper}>
            <div css={detailTitleWrapper}>
              <p css={detailTitleStyle}>스픽커</p>
              <p css={detailInfoStyle}>{hostNickname}</p>
            </div>
            <div css={detailTitleWrapper}>
              <p css={detailTitleStyle}>날짜</p>
              <p css={detailInfoStyle}>{dateList && `${dateList.date} (${dateList.dayOfWeek})`}</p>
            </div>
            <div css={detailTitleWrapper}>
              <p css={detailTitleStyle}>참가비</p>
              <p css={detailInfoStyle}>{fee?.toLocaleString()}원</p>
            </div>
          </div>
        </article>
      </article>
      {moimSubmissionState === 'pendingPayment' ? (
        <Button variant="xSmall" onClick={handleButtonClick}>
          입금하기
        </Button>
      ) : null}

      {moimSubmissionState === 'completed' && (
        <Button
          variant={isReviewed ? 'xSmallStroke' : 'xSmall'}
          onClick={isReviewed ? handleWatchReviewClick : handleWriteReviewClick}>
          {isReviewed ? '작성한 리뷰 보기' : '리뷰 쓰기'}
        </Button>
      )}

      {isOpen && (
        <Modal onClose={handleButtonClick}>
          <DepositModal onClose={handleButtonClick} />
        </Modal>
      )}
    </div>
  );
};

export default MoimCard;
