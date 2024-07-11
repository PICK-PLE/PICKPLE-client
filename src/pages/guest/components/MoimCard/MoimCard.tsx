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
import { Moim } from '../../../../types/responseType';

interface MoimCardProps {
  data: Moim;
}

const MoimCard = ({ data }: MoimCardProps) => {
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
            data.moimSubmissionState !== 'COMPLETED' ? (
              <Label variant="status">{statusMap[data.moimSubmissionState]}</Label>
            ) : null
          }
        />

        <article css={detailInfoWrapper}>
          <div css={titleWrapper}>
            <p css={titleStyle}>{data.moimTitle}</p>
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
              <p css={detailInfoStyle}>{data.hostNickname}</p>
            </div>
            <div css={detailTitleWrapper}>
              <p css={detailTitleStyle}>모임날짜</p>
              <p css={detailInfoStyle}>
                {data.dateList.date} ({data.dateList.dayOfWeek})
              </p>
            </div>
            <div css={detailTitleWrapper}>
              <p css={detailTitleStyle}>참가비</p>
              <p css={detailInfoStyle}>{data.fee.toLocaleString()}원</p>
            </div>
          </div>
        </article>
      </article>
      {data.moimSubmissionState === 'PENDING_PAYMENT' ? (
        <Button variant="xSmall" onClick={() => {}}>
          입금하기
        </Button>
      ) : null}
    </div>
  );
};

export default MoimCard;
