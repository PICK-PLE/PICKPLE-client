import { Image, Label } from '@components';
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
} from './MoimCard.style';
import { IcDropdownRight } from '@svg';
import { Moim } from '../../../../types/responseType';

interface MoimCardProps {
  data: Moim;
}

const MoimCard = ({ data }: MoimCardProps) => {
  return (
    <article css={moimCardContainer}>
      <Image
        variant="square"
        width="11.2rem"
        height="11.2rem"
        label={<Label variant="status">{data.moimSubmissionState}</Label>}
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
              {data.dateList.date} {data.dateList.dayOfWeek}
            </p>
          </div>
          <div css={detailTitleWrapper}>
            <p css={detailTitleStyle}>참가비</p>
            <p css={detailInfoStyle}>{data.fee.toLocaleString()}원</p>
          </div>
        </div>
      </article>
    </article>
  );
};

export default MoimCard;
