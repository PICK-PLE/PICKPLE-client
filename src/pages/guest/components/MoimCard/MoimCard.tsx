import { Button, Image, Label, Modal } from '@components';
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
} from './MoimCard.style';
import { IcDropdownRight } from '@svg';
import { statusMapText } from 'src/constants/mappingText';
import { useState } from 'react';
import DepositModal from '../DepositModal/DepositModal';
import { useNavigate } from 'react-router-dom';
import { components } from '@schema';

type SubmittedMoimByGuestResponse = components['schemas']['SubmittedMoimByGuestResponse'];

interface MoimCardProps {
  guestMyClassData: SubmittedMoimByGuestResponse;
}

const MoimCard = ({ guestMyClassData }: MoimCardProps) => {
  const { moimSubmissionState, title, hostNickname, dateList, fee, imageUrl, moimId } =
    guestMyClassData;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCardClick = () => {
    navigate(`/class/${moimId}`);
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
        />
        <article css={detailInfoWrapper}>
          <div css={titleWrapper} onClick={handleCardClick}>
            <p css={titleStyle}>{title}</p>
            <IcDropdownRight css={iconStyle} />
          </div>
          <div css={detailWrapper}>
            <div css={detailTitleWrapper}>
              <p css={detailTitleStyle}>호스트</p>
              <p css={detailInfoStyle}>{hostNickname}</p>
            </div>
            <div css={detailTitleWrapper}>
              <p css={detailTitleStyle}>모임날짜</p>
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
      {isOpen && (
        <Modal onClose={handleButtonClick}>
          <DepositModal onClose={handleButtonClick} />
        </Modal>
      )}
    </div>
  );
};

export default MoimCard;
