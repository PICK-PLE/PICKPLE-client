import { Button, FilterSelect, Header, Image } from '@components';
import GuestMyClassCard from '@pages/guest/components/GuestMyClassCard/GuestMyClassCard';
import {
  guestMyClassLayout,
  tapLine,
  tabWrapper,
  getTabStyle,
  filterSelectWrapper,
  guestMyClassCardContainer,
  filterSelectStyle,
  completedTabContainer,
  textWrapper,
  textStyle,
  detailWrapper,
} from './GuestMyClass.style';
import { useState } from 'react';
import { GUEST_MY_CLASS_DATA } from 'src/constants/mocks/guestMyClassCardData';

const GuestMyClass = () => {
  const [activeTab, setActiveTab] = useState<'신청한' | '참가한'>('신청한');

  const appliedClasses = GUEST_MY_CLASS_DATA.filter(
    (data) => data.moimSubmissionState !== 'COMPLETED'
  );
  const completedClasses = GUEST_MY_CLASS_DATA.filter(
    (data) => data.moimSubmissionState === 'COMPLETED'
  );

  return (
    <>
      <Header title="my 클래스 모임" onClick={() => {}} />
      <article css={guestMyClassLayout}>
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
      {activeTab === '신청한' ? (
        appliedClasses.length === 0 ? (
          <article css={completedTabContainer}>
            <Image width="12rem" src="https://picsum.photos/120" />
            <div css={detailWrapper}>
              <div css={textWrapper}>
                <p css={textStyle}>아직 신청한 모임이 없어요</p>
                <p css={textStyle}>다양한 클래스 모임을 둘러보세요:{')'}</p>
              </div>
              <Button variant="round">클래스 모임 둘러보기</Button>
            </div>
          </article>
        ) : (
          <div css={guestMyClassCardContainer}>
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
                />
              </div>
            </article>
            <GuestMyClassCard />
          </div>
        )
      ) : completedClasses.length === 0 ? (
        <article css={completedTabContainer}>
          <Image width="12rem" src="https://picsum.photos/120" />
          <div css={detailWrapper}>
            <div css={textWrapper}>
              <p css={textStyle}>아직 참가한 모임이 없어요</p>
              <p css={textStyle}>다양한 클래스 모임을 둘러보세요:{')'}</p>
            </div>
            <Button variant="round">클래스 모임 둘러보기</Button>
          </div>
        </article>
      ) : (
        <div css={guestMyClassCardContainer}>
          <GuestMyClassCard />
        </div>
      )}
    </>
  );
};

export default GuestMyClass;
