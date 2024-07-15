import { useState } from 'react';
import { ClassEmptyReview, ClassInfo, ClassNotice, HostInfoCard } from '@pages/class/components';
import { Button, Carousel, IconText, Label, LogoHeader, ShareButton } from '@components';
import {
  buttonContainer,
  carouselWrapper,
  classInfo,
  classInfoList,
  classLayout,
  classNameStyle,
  infoSectionStyle,
  selectedTabStyle,
  tabButtonStyle,
  tabSectionStyle,
  tabWrapper,
} from './Class.style';
import { IcClassPerson, IcDate, IcMoney, IcOffline, IcOneline } from '@svg';

import { useParams } from 'react-router-dom';
import { useFetchMoimDetail, useFetchMoimDescription } from '@apis/domains/moim';
import { useWindowSize } from '@hooks';
import { useFetchMoimNoticeList } from '@apis/domains/notice';

const Class = () => {
  const { windowWidth } = useWindowSize();
  const [selectTab, setSelectTab] = useState<'모임소개' | '공지사항' | '리뷰'>('모임소개');
  const { classId } = useParams<{ classId: string }>();

  const { data: moimDetail } = useFetchMoimDetail(classId ?? '');
  const { data: moimDescription } = useFetchMoimDescription(classId ?? '');
  const { data: moimNoticeList } = useFetchMoimNoticeList(classId ?? '', selectTab);

  if (!moimDetail) {
    return <div>No details found</div>;
  }
  const { dayOfDay, title, dateList, isOffline, spot, maxGuest, fee, imageList } = moimDetail;

  const { date, dayOfWeek, startTime, endTime } = dateList ?? {};

  return (
    <div>
      <LogoHeader />
      <div css={classLayout}>
        <div css={carouselWrapper}>
          <Carousel imageList={Object.values(imageList || [])} />
        </div>
        <section css={classInfo}>
          <Label variant="dDay">{`마감 D${dayOfDay}`}</Label>
          <h1 css={classNameStyle}>{title}</h1>
          <ul css={classInfoList}>
            <li>
              {<IconText icon={isOffline ? <IcOffline /> : <IcOneline />} text={spot || ''} />}
            </li>
            <li>
              <IconText
                icon={<IcDate />}
                text={`${date}. (${dayOfWeek}) ${startTime} - ${endTime}`}
              />
            </li>
            <li>
              <IconText icon={<IcClassPerson />} text={`최대 ${maxGuest}명 모집`} />
            </li>
            <li>
              <IconText icon={<IcMoney />} text={`${fee?.toString().toLocaleString()}원`} />
            </li>
          </ul>
          <HostInfoCard hostId={moimDetail.hostId ?? 0} />
        </section>
        <div css={tabWrapper}>
          <button
            css={[tabButtonStyle, selectTab === '모임소개' && selectedTabStyle]}
            type="button"
            onClick={() => setSelectTab('모임소개')}>
            모임 소개
          </button>
          <button
            css={[tabButtonStyle, selectTab === '공지사항' && selectedTabStyle]}
            type="button"
            onClick={() => setSelectTab('공지사항')}>
            공지 사항
          </button>
          <button
            css={[tabButtonStyle, selectTab === '리뷰' && selectedTabStyle]}
            type="button"
            onClick={() => setSelectTab('리뷰')}>
            리뷰
          </button>
        </div>
        <section css={[tabSectionStyle, selectTab === '모임소개' && infoSectionStyle]}>
          {selectTab === '모임소개' && <ClassInfo content={moimDescription ?? ''} />}
          {selectTab === '공지사항' && <ClassNotice noticeData={moimNoticeList || []} />}
          {selectTab === '리뷰' && <ClassEmptyReview />}
        </section>
        <section css={buttonContainer(windowWidth)}>
          <ShareButton />
          <Button variant="large">참여하기</Button>
        </section>
      </div>
    </div>
  );
};

export default Class;
