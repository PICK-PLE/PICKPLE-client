import { useState } from 'react';
import {
  ClassInfo,
  ClassNotice,
  ClassNoticeEmptyView,
  ClassReviewEmptyView,
  HostInfoCard,
} from '@pages/class/components';
import {
  Button,
  Carousel,
  IconButton,
  IconText,
  Label,
  LogoHeader,
  ShareButton,
  Spinner,
  Toast,
} from '@components';
import {
  buttonContainer,
  carouselWrapper,
  classInfo,
  classInfoList,
  classLayout,
  classNameStyle,
  floatingButtonWrapper,
  infoSectionStyle,
  tabButtonStyle,
  tabSectionStyle,
  tabWrapper,
} from './Class.style';
import { IcClassPerson, IcCopyPlus, IcDate, IcMoney, IcOffline, IcOneline } from '@svg';

import { useNavigate, useParams } from 'react-router-dom';
import { useFetchMoimDetail, useFetchMoimDescription } from '@apis/domains/moim';
import { useClipboard, useToast, useWindowSize } from '@hooks';
import { useFetchMoimNoticeList } from '@apis/domains/notice';
import { MoimIdPathParameterType } from '@types';
import Error from '@pages/error/Error';
import { dDayText, handleShare, smoothScroll } from '@utils';
import { useAtom } from 'jotai';
import { userAtom } from '@stores';

const Class = () => {
  const { windowWidth } = useWindowSize();
  const navigate = useNavigate();
  const [selectTab, setSelectTab] = useState<'모임소개' | '공지사항' | '리뷰'>('모임소개');
  const { moimId } = useParams<MoimIdPathParameterType>();
  const { handleCopyToClipboard } = useClipboard();
  const { showToast, isToastVisible } = useToast();
  const [{ hostId }] = useAtom(userAtom);

  const { data: moimDetail, isLoading: isMoimDetailLoading } = useFetchMoimDetail(moimId ?? '');
  const { data: moimDescription, isLoading: isMoimDescriptionLoading } = useFetchMoimDescription(
    moimId ?? ''
  );
  const { data: moimNoticeList, isLoading: isMoimNoticeListLoading } = useFetchMoimNoticeList(
    moimId ?? '',
    selectTab
  );

  if (isMoimDetailLoading || isMoimDescriptionLoading) {
    return <Spinner />;
  }

  if (!moimDetail || !moimDescription) {
    return <Error />;
  }
  const { dayOfDay = 0, title, dateList, isOffline, spot, maxGuest, fee, imageList } = moimDetail;

  const { date, dayOfWeek, startTime, endTime } = dateList ?? {};

  const url = `https://pick-ple.com/class/${moimId}`;
  const shareTitle = 'PICK!PLE';
  const text = title ?? '';

  const handleNoticePostClick = (moimId: string) => {
    navigate(`/class/${moimId}/notice/post`);
  };

  const handleApplyButtonClick = () => {
    smoothScroll(0);
    navigate(`/class/${moimId}/apply/rule`);
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
          <Carousel
            imageList={Object.values(imageList || []).filter(
              (value) => value !== null && value !== ''
            )}
          />
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
              css={tabButtonStyle(selectTab === '모임소개')}
              type="button"
              onClick={() => setSelectTab('모임소개')}>
              모임 소개
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
        <section css={[tabSectionStyle, selectTab === '모임소개' && infoSectionStyle]}>
          {selectTab === '모임소개' && <ClassInfo content={moimDescription ?? ''} />}
          {selectTab === '공지사항' &&
            (isMoimNoticeListLoading ? (
              <Spinner variant="component" />
            ) : (moimNoticeList || []).length === 0 ? (
              <ClassNoticeEmptyView />
            ) : (
              <ClassNotice noticeData={moimNoticeList || []} />
            ))}
          {selectTab === '리뷰' && <ClassReviewEmptyView />}
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
            disabled={dayOfDay < 0 || moimDetail.hostId === hostId}>
            참여하기
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
