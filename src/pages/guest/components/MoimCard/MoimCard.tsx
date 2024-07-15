import { Button, Image, Label } from '@components';
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
import { MoimResponseType } from '@types';
import { statusMapText } from 'src/constants/mappingText';

interface MoimCardProps {
  guestMyClassData: MoimResponseType;
}

const MoimCard = ({ guestMyClassData }: MoimCardProps) => {
  const { moimSubmissionState, title, hostNickname, dateList, fee, imageUrl } = guestMyClassData;
  return (
    <div css={moimCardLayout}>
      <article css={moimCardContainer}>
        <Image
          src={imageUrl}
          width="11.2rem"
          label={
            moimSubmissionState !== 'completed' ? (
              <Label variant="status">{statusMapText[moimSubmissionState]}</Label>
            ) : null
          }
        />
        <article css={detailInfoWrapper}>
          <div css={titleWrapper} onClick={() => {}}>
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
              <p css={detailInfoStyle}>
                {dateList.date} ({dateList.dayOfWeek})
              </p>
            </div>
            <div css={detailTitleWrapper}>
              <p css={detailTitleStyle}>참가비</p>
              <p css={detailInfoStyle}>{fee.toLocaleString()}원</p>
            </div>
          </div>
        </article>
      </article>
      {moimSubmissionState === 'pendingPayment' ? (
        <Button variant="xSmall" onClick={() => {}}>
          입금하기
        </Button>
      ) : null}
    </div>
  );
};

export default MoimCard;
