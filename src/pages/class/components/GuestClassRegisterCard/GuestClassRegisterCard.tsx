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
//import { APPLIED_MOIM_DATA } from './appliedMoimData';
import { useGetMoimDetail } from '@apis/domains/moim/useFetchMoimDetail';
import { useEffect, useState } from 'react';
import { APPLIED_MOIM_DATA2 } from '@pages/class/components/GuestClassRegisterCard/appliedMoimData';

export interface MoimDetailData {
  title: string;
  hostNickName: string;
  isOffline: boolean;
  spot: string;
  dateList: {
    date: string;
    dayOfWeek: string;
    startTime: string;
    endTime: string;
  };
  fee: number;
  hostImageUrl: string;
  moimImageUrl: string;
}

const GuestClassRegisterCard = () => {
  const { data } = useGetMoimDetail(1);
  const [appliedMoimData, setAppliedMoimData] = useState<MoimDetailData>(APPLIED_MOIM_DATA2);

  const { title, hostNickName, isOffline, spot, dateList, fee, hostImageUrl, moimImageUrl } =
    appliedMoimData;

  useEffect(() => {
    if (data) {
      setAppliedMoimData(data.data);
    }
  }, [data]);

  return (
    <article css={cardContainerStyle}>
      <section css={headSectionStyle}>
        <Image width="8.4rem" src={moimImageUrl} />
        <div css={titleAndProfileWrapperStyle}>
          <h4 css={titleStyle}>{title}</h4>
          <SimpleUserProfile username={hostNickName} size="medium" userImgUrl={hostImageUrl} />
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
          <span css={textSpanStyle}>
            {dateList.date}. ({dateList.dayOfWeek}) {dateList.startTime} - {dateList.endTime}
          </span>
        </div>
      </section>
      <span css={dividerStyle} />
      <section css={feeWrapperStyle}>
        <span css={feeSpanStyle}>참가비</span>
        <span css={feeStyle}>{fee.toLocaleString()}원</span>
      </section>
    </article>
  );
};

export default GuestClassRegisterCard;
