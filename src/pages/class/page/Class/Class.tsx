import { useState } from 'react';
import { ClassEmptyReview, ClassInfo, ClassNotice, HostInfoCard } from '@pages/class/components';
import { Button, Carousel, IconText, Label, LogoHeader, ShareButton } from '@components';
import {
  buttonContainer,
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
import { IcClassPerson, IcDate, IcMoney, IcOneline } from '@svg';

// mocking data
import { NoticeCardData } from 'src/constants/mocks/NoticeCardData';
import { classInfoData } from 'src/constants/mocks/classInfoData';

const Class = () => {
  const carouselImageList = [
    'https://placehold.co/500',
    'https://placehold.co/500',
    'https://placehold.co/500',
  ];

  const [selectTab, setSelectTab] = useState<'모임소개' | '공지사항' | '리뷰'>('모임소개');

  return (
    <div css={classLayout}>
      <LogoHeader />
      <Carousel imageList={carouselImageList} />
      <section css={classInfo}>
        <Label variant="dDay">마감 D-1</Label>
        <h1 css={classNameStyle}>부산 10년 토박이 달아오르구마와 함께하는 사투리리</h1>
        <ul css={classInfoList}>
          <li>
            <IconText icon={<IcOneline />} text="서울시 강남구 논현동" />
          </li>
          <li>
            <IconText icon={<IcDate />} text="서울시 강남구 논현동" />
          </li>
          <li>
            <IconText icon={<IcClassPerson />} text="서울시 강남구 논현동" />
          </li>
          <li>
            <IconText icon={<IcMoney />} text="서울시 강남구 논현동" />
          </li>
        </ul>
        <HostInfoCard />
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
        {selectTab === '모임소개' && <ClassInfo content={classInfoData.description} />}
        {selectTab === '공지사항' && <ClassNotice noticeData={NoticeCardData} />}
        {selectTab === '리뷰' && <ClassEmptyReview />}
      </section>
      <section css={buttonContainer}>
        <ShareButton />
        <Button variant="large">참여하기</Button>
      </section>
    </div>
  );
};

export default Class;
