import { useAtom } from 'jotai';
import { Suspense, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useFetchMoimDetail, useFetchMoimDescription } from '@apis/domains/moim';
import { useFetchMoimNoticeList } from '@apis/domains/notice';

import {
  Button,
  IconButton,
  IconText,
  Label,
  LogoHeader,
  ShareButton,
  Spinner,
  Toast,
} from '@components';
import { useClipboard, useToast, useWindowSize } from '@hooks';
import {
  ClassInfo,
  ClassNotice,
  ClassNoticeEmptyView,
  HostInfoCard,
} from '@pages/class/components';
import ClassReviewTab from '@pages/class/components/ClassReviewTab/ClassReviewTab';
import Error from '@pages/error/Error';
import { userAtom } from '@stores';
import { IcClassPerson, IcCopyPlus, IcDate, IcMoney, IcOffline, IcOneline } from '@svg';
import { dDayText, handleShare, smoothScroll } from '@utils';

import {
  buttonContainer,
  carouselWrapper,
  classInfo,
  classInfoList,
  classLayout,
  classNameStyle,
  floatingButtonWrapper,
  imageStyle,
  infoSectionStyle,
  swiperStyle,
  tabButtonStyle,
  tabSectionStyle,
  tabWrapper,
} from './Class.style';

import { MoimIdPathParameterType } from '@types';

import 'swiper/css';
import 'swiper/css/pagination';

const Class = () => {
  const { windowWidth } = useWindowSize();
  const navigate = useNavigate();
  const [selectTab, setSelectTab] = useState<'클래스소개' | '공지사항' | '리뷰'>('클래스소개');
  const { moimId } = useParams<MoimIdPathParameterType>();
  const { handleCopyToClipboard } = useClipboard();
  const { showToast, isToastVisible } = useToast();
  const [{ hostId }] = useAtom(userAtom);

  const { data: moimDetail, isLoading: isMoimDetailLoading } = useFetchMoimDetail(moimId ?? '');
  const { data: moimDescription, isLoading: isMoimDescriptionLoading } = useFetchMoimDescription(
    moimId ?? ''
  );
  const { data: moimNoticeList } = useFetchMoimNoticeList(moimId ?? '');
  if (isMoimDetailLoading || isMoimDescriptionLoading) {
    return <Spinner />;
  }

  if (!moimDetail || !moimDescription) {
    return <Error />;
  }
  const {
    dayOfDay = 0,
    title,
    dateList,
    isOffline,
    spot,
    maxGuest,
    fee,
    imageList,
    isSubmitted,
  } = moimDetail;
  const swiperImageList = Object.values(imageList || []).filter(
    (value) => value !== null && value !== ''
  );
  const isClassClosed = dayOfDay < 0;

  const { date, dayOfWeek, startTime, endTime } = dateList ?? {};

  const url = `https://pick-ple.com/class/${moimId}`;
  const shareTitle = 'PICK!PLE';
  const text = title ?? '';

  const handleNoticePostClick = (moimId: string) => {
    navigate(`/class/${moimId}/notice/post`);
  };

  const handleApplyButtonClick = () => {
    smoothScroll(0);
    navigate(isSubmitted ? `/mypage/guest/myclass` : `/class/${moimId}/apply`);
  };

  const handleShareButtonClick = async () => {
    const shareSuccess = await handleShare(url, shareTitle, text, handleCopyToClipboard);
    if (shareSuccess === false) {
      showToast();
    }
  };
  return (
    <div>
      <LogoHeader />
      <div css={classLayout}>
        <div css={carouselWrapper}>
          <Swiper css={swiperStyle} pagination={true} modules={[Pagination]} loop={true}>
            {swiperImageList.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img css={imageStyle} src={image} alt={`Carousel ${index}`} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <section css={classInfo}>
          <Label variant="dDay">{`마감${dDayText(dayOfDay)}`}</Label>
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
              <IconText icon={<IcMoney />} text={`${fee?.toLocaleString()}원`} />
            </li>
          </ul>
          <HostInfoCard hostId={moimDetail.hostId ?? 0} />
        </section>
        <div css={tabWrapper}>
          <button
            css={tabButtonStyle(selectTab === '클래스소개')}
            type="button"
            onClick={() => setSelectTab('클래스소개')}>
            클래스 소개
          </button>
          <button
            css={tabButtonStyle(selectTab === '공지사항')}
            type="button"
            onClick={() => setSelectTab('공지사항')}>
            공지 사항
          </button>
          <button
            css={tabButtonStyle(selectTab === '리뷰')}
            type="button"
            onClick={() => setSelectTab('리뷰')}>
            리뷰
          </button>
        </div>
        <section css={[tabSectionStyle, selectTab === '클래스소개' && infoSectionStyle]}>
          {selectTab === '클래스소개' && <ClassInfo content={moimDescription ?? ''} />}
          {selectTab === '공지사항' &&
            ((moimNoticeList || []).length === 0 ? (
              <ClassNoticeEmptyView />
            ) : (
              <ClassNotice noticeData={moimNoticeList || []} moimId={moimId ?? ''} />
            ))}
          {selectTab === '리뷰' && (
            <Suspense fallback={<Spinner />}>
              <ClassReviewTab moimId={moimId ?? ''} />
            </Suspense>
          )}
        </section>
        {selectTab === '공지사항' && moimDetail?.hostId === hostId && (
          <div
            css={floatingButtonWrapper(windowWidth)}
            onClick={() => {
              moimId && handleNoticePostClick(moimId);
            }}>
            <IconButton icon={<IcCopyPlus />}>작성하기</IconButton>
          </div>
        )}
        <section css={buttonContainer(windowWidth)}>
          <ShareButton onClick={handleShareButtonClick} />
          <Button
            variant="large"
            onClick={handleApplyButtonClick}
            disabled={isClassClosed || moimDetail.hostId === hostId}>
            {isClassClosed ? '모집 완료' : isSubmitted ? `신청 완료` : `참여하기`}
          </Button>
        </section>
      </div>
      {isToastVisible && (
        <Toast isVisible={isToastVisible} toastBottom={10}>
          클립보드에 모임 링크를 복사했어요!
        </Toast>
      )}
    </div>
  );
};

export default Class;
