import { FilterSelect, Header } from '@components';
import GuestMyClassCard from '@pages/guest/components/GuestMyClassCard/GuestMyClassCard';
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
      <div css={guestMyClassCardContainer}>
        <article css={filterSelectWrapper}>
          <div css={filterSelectStyle}>
            <FilterSelect
              options={['전체', '입금 대기', '승인 대기', '승인 완료', '승인 거절', '환불 완료']}
            />
          </div>
        </article>
        <GuestMyClassCard />
      </div>
    </>
  );
};

export default GuestMyClass;
