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

interface MoimCardProps {
  guestMyClassData: MoimResponseType;
}

const MoimCard = ({ guestMyClassData }: MoimCardProps) => {
  const { moimSubmissionState, moimTitle, hostNickname, dateList, fee } = guestMyClassData;
  const statusMap: { [key: string]: string } = {
    PENDING_PAYMENT: '입금 대기',
    PENDING_APPROVAL: '승인 대기',
    APPROVED: '승인 완료',
    REJECTED: '승인 거절',
    REFUNDED: '환불 완료',
    COMPLETED: '참가 완료',
  };

  return (
    <div css={moimCardLayout}>
      <article css={moimCardContainer}>
        <Image
          src="https://placehold.co/112x112"
          width="11.2rem"
          label={
            moimSubmissionState !== 'COMPLETED' ? (
              <Label variant="status">{statusMap[moimSubmissionState]}</Label>
            ) : null
          }
        />

        <article css={detailInfoWrapper}>
          <div css={titleWrapper}>
            <p css={titleStyle}>{moimTitle}</p>
            <span
              css={iconStyle}
              onClick={() => {
                console.log('아이콘 클릭!!');
              }}>
              <IcDropdownRight />
            </span>
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
      {moimSubmissionState === 'PENDING_PAYMENT' ? (
        <Button variant="xSmall" onClick={() => {}}>
          입금하기
        </Button>
      ) : null}
    </div>
  );
};

export default MoimCard;
