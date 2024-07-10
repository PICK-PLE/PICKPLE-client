import Image from 'src/components/common/Image/Image';
import SimpleUserProfile from 'src/components/common/SimpleUserProfile/SimpleUserProfile';
import {
  cardContainerStyle,
  dividerStyle,
  headSectionStyle,
  iconAndSpanStyle,
  titleAndProfileWrapperStyle,
  titleStyle,
} from './GuestClassRegisterCard.style';
import { IcDate, IcOffline, IcOneline } from '@svg';
import { APPLIED_MOIM_DATA } from './appliedMoimData';

const appliedMoimData = APPLIED_MOIM_DATA.data;
console.log(appliedMoimData);

const GuestClassRegisterCard = () => {
  return (
    <article css={cardContainerStyle}>
      <section css={headSectionStyle}>
        <Image variant="square" width="84px" height="84px" />
        <div css={titleAndProfileWrapperStyle}>
          <h4 css={titleStyle}>{appliedMoimData.title}</h4>
          <SimpleUserProfile username={appliedMoimData.hostNickName} />
        </div>
      </section>
      <section>
        <div css={iconAndSpanStyle}>
          {appliedMoimData.isOffline ? <IcOffline /> : <IcOneline />}
          <span>{appliedMoimData.spot}</span>
        </div>
        <div css={iconAndSpanStyle}>
          <IcDate />
          <span>{appliedMoimData.dateList.date}</span>
        </div>
      </section>
      <span css={dividerStyle}></span>
      <section></section>
    </article>
  );
};

export default GuestClassRegisterCard;
