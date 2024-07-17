import Image from 'src/components/common/Image/Image';
import SimpleUserProfile from 'src/components/common/SimpleUserProfile/SimpleUserProfile';
import {
  cardContainerStyle,
  dividerStyle,
  feeSpanStyle,
  feeStyle,
  feeWrapperStyle,
  headSectionStyle,
  iconAndSpanStyle,
  iconStyle,
  spotAndDateSectionStyle,
  textSpanStyle,
  titleAndProfileWrapperStyle,
  titleStyle,
} from './GuestClassRegisterCard.style';
import { IcDate, IcOffline, IcOneline } from '@svg';
import { useFetchSubmittedMoimDetail } from '@apis/domains/moim';

interface GuestClassRegisterCardProps {
  moimId: number;
}

const GuestClassRegisterCard = ({moimId}: GuestClassRegisterCardProps) => {
  const { data: appliedMoimData } = useFetchSubmittedMoimDetail(moimId);

  if (!appliedMoimData) {
    return <div>empty view</div>;
  }

  const { title, hostNickname, isOffline, spot, dateList, fee, hostImageUrl, moimImageUrl } =
    appliedMoimData;
  const { date, dayOfWeek, startTime, endTime } = dateList ?? {};

  return (
    <article css={cardContainerStyle}>
      <section css={headSectionStyle}>
        <Image width="8.4rem" src={moimImageUrl ?? ''} />
        <div css={titleAndProfileWrapperStyle}>
          <h4 css={titleStyle}>{title}</h4>
          <SimpleUserProfile
            username={hostNickname ?? ''}
            size="medium"
            userImgUrl={hostImageUrl}
          />
        </div>
      </section>
      <section css={spotAndDateSectionStyle}>
        <div css={iconAndSpanStyle}>
          <span css={iconStyle}>{isOffline ? <IcOffline /> : <IcOneline />}</span>
          <span css={textSpanStyle}>{spot}</span>
        </div>
        <div css={iconAndSpanStyle}>
          <span css={iconStyle}>
            <IcDate />
          </span>
          <span css={textSpanStyle}>{`${date}. (${dayOfWeek}) ${startTime} - ${endTime}`}</span>
        </div>
      </section>
      <span css={dividerStyle} />
      <section css={feeWrapperStyle}>
        <span css={feeSpanStyle}>참가비</span>
        <span css={feeStyle}>{fee?.toLocaleString()}원</span>
      </section>
    </article>
  );
};

export default GuestClassRegisterCard;
