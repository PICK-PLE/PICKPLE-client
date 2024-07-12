import { FilterSelect, Header } from '@components';
import {
  guestMyClassLayout,
  tapLine,
  tabWrapper,
  getTabStyle,
  filterSelectWrapper,
  guestMyClassCardContainer,
  filterSelectStyle,
} from './GuestMyClass.style';
import { useState } from 'react';
import { GUEST_MY_CLASS_DATA } from 'src/constants/mocks/guestMyClassCardData';
import { GuestMyClassEmptyView, MoimCard } from '@pages/guest/components';

const GuestMyClass = () => {
  const [activeTab, setActiveTab] = useState<'신청한' | '참가한'>('신청한');

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

      {/* filter select */}
      {GUEST_MY_CLASS_DATA.length !== 0 && activeTab === '신청한' && (
        <article css={filterSelectWrapper}>
          <div css={filterSelectStyle}>
            <FilterSelect
              options={['전체', '입금 대기', '승인 대기', '승인 완료', '승인 거절', '환불 완료']}
            />
          </div>
        </article>
      )}

      {GUEST_MY_CLASS_DATA.length === 0 ? (
        <GuestMyClassEmptyView
          text={activeTab === '신청한' ? '아직 신청한 모임이 없어요' : '아직 참가한 모임이 없어요'}
        />
      ) : (
        GUEST_MY_CLASS_DATA.map((data) => (
          <div css={guestMyClassCardContainer}>
            <MoimCard key={data.moimId} guestMyClassData={data} />
          </div>
        ))
      )}
    </>
  );
};

export default GuestMyClass;
