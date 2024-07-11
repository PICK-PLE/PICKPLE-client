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
import { MoimResponseType } from '../../../../types/responseType';

interface MoimCardProps {
  guestMyClassData: MoimResponseType;
}

const MoimCard = ({ guestMyClassData }: MoimCardProps) => {
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
          variant="square"
          width="11.2rem"
          height="11.2rem"
          label={
            guestMyClassData.moimSubmissionState !== 'COMPLETED' ? (
              <Label variant="status">{statusMap[guestMyClassData.moimSubmissionState]}</Label>
            ) : null
          }
        />

        <article css={detailInfoWrapper}>
          <div css={titleWrapper}>
            <p css={titleStyle}>{guestMyClassData.moimTitle}</p>
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
              <p css={detailInfoStyle}>{guestMyClassData.hostNickname}</p>
            </div>
            <div css={detailTitleWrapper}>
              <p css={detailTitleStyle}>모임날짜</p>
              <p css={detailInfoStyle}>
                {guestMyClassData.dateList.date} ({guestMyClassData.dateList.dayOfWeek})
              </p>
            </div>
            <div css={detailTitleWrapper}>
              <p css={detailTitleStyle}>참가비</p>
              <p css={detailInfoStyle}>{guestMyClassData.fee.toLocaleString()}원</p>
            </div>
          </div>
        </article>
      </article>
      {guestMyClassData.moimSubmissionState === 'PENDING_PAYMENT' ? (
        <Button variant="xSmall" onClick={() => {}}>
          입금하기
        </Button>
      ) : null}
    </div>
  );
};

export default MoimCard;
