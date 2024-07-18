import { FilterSelect, Header } from '@components';
import {
  guestMyClassLayout,
  tapLine,
  tabWrapper,
  getTabStyle,
  filterSelectWrapper,
  guestMyClassCardContainer,
  filterSelectStyle,
  GuestMyClassBackground,
  guestMyClassContainer,
  mainWrapper,
} from './GuestMyClass.style';
import { useEffect, useState } from 'react';
import { GuestMyClassEmptyView, MoimCard } from '@pages/guest/components';
import { useAtom } from 'jotai';
import { userAtom } from '@stores';
import { statusMapText } from 'src/constants/mappingText';
import { useFetchGuestApply, useFetchGuestParticipate } from '@apis/domains/moim';

const GuestMyClass = () => {
  const [activeTab, setActiveTab] = useState<'신청한' | '참가한'>('신청한');
  const [{ guestId }] = useAtom(userAtom);
  const [selectedStatus, setSelectedStatus] = useState<string>('전체');
  const [moimSubmissionState, setMoimSubmissionState] = useState<string>('all');

  useEffect(() => {
    const newMoimSubmissionState =
      selectedStatus === '전체'
        ? 'all'
        : Object.keys(statusMapText).find((key) => statusMapText[key] === selectedStatus) || 'all';
    setMoimSubmissionState(newMoimSubmissionState);
  }, [selectedStatus]);

  const {
    data: applyData,
    isLoading: isApplyLoading,
    error: applyError,
  } = useFetchGuestApply(guestId ?? 0, moimSubmissionState || 'all');

  const {
    data: participateData,
    isLoading: isParticipateLoading,
    error: participateError,
  } = useFetchGuestParticipate(guestId ?? 0);

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
  };

  if (isApplyLoading || isParticipateLoading) {
    return <div>Loading...</div>;
  }

  if (applyError || participateError) {
    return <div>Error: {applyError?.message || participateError?.message}</div>;
  }

  const currentData = activeTab === '신청한' ? applyData : participateData;

  return (
    <div css={GuestMyClassBackground}>
      <Header title="my 클래스 모임" />
      <div css={guestMyClassLayout}>
        <article css={guestMyClassContainer}>
          <div css={tapLine} />
          <div css={tabWrapper}>
            <div css={getTabStyle(activeTab === '신청한')} onClick={() => setActiveTab('신청한')}>
              신청한
            </div>
            <div css={getTabStyle(activeTab === '참가한')} onClick={() => setActiveTab('참가한')}>
              참가한
            </div>
          </div>
        </article>

        <main css={mainWrapper}>
          {activeTab === '신청한' && (
            <article css={filterSelectWrapper}>
              <div css={filterSelectStyle}>
                <FilterSelect
                  options={[
                    '전체',
                    '입금 대기',
                    '승인 대기',
                    '승인 완료',
                    '승인 거절',
                    '환불 완료',
                  ]}
                  onOptionSelect={handleStatusChange}
                />
              </div>
            </article>
          )}

          {!currentData ? (
            <GuestMyClassEmptyView
              text={
                activeTab === '신청한' ? '아직 신청한 모임이 없어요' : '아직 참가한 모임이 없어요'
              }
            />
          ) : (
            currentData.map((data) => (
              <div css={guestMyClassCardContainer} key={data.moimId}>
                <MoimCard guestMyClassData={data} />
              </div>
            ))
          )}
        </main>
      </div>
    </div>
  );
};

export default GuestMyClass;
