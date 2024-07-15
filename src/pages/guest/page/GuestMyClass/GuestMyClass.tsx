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
} from './GuestMyClass.style';
import { useState } from 'react';
import { GuestMyClassEmptyView, MoimCard } from '@pages/guest/components';
import { useFetchGuestApply } from '@apis/domains/moim/useFetchGuestApply';
import { useAtom } from 'jotai';
import { userAtom } from '@stores';

const GuestMyClass = () => {
  const [activeTab, setActiveTab] = useState<'신청한' | '참가한'>('신청한');
  const [{ guestId }] = useAtom(userAtom);

  //게스트아이디의 타입이 number | undefined입니다. 이 타입을 강제로 Number로 매번 선언해줘야 하네요...
  const { data: applyData } = useFetchGuestApply(guestId ?? 0, 'pendingPayment');

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

        {/* filter select */}
        {applyData && activeTab === '신청한' && (
          <article css={filterSelectWrapper}>
            <div css={filterSelectStyle}>
              <FilterSelect
                options={['전체', '입금 대기', '승인 대기', '승인 완료', '승인 거절', '환불 완료']}
              />
            </div>
          </article>
        )}

        {!applyData ? (
          <GuestMyClassEmptyView
            text={
              activeTab === '신청한' ? '아직 신청한 모임이 없어요' : '아직 참가한 모임이 없어요'
            }
          />
        ) : (
          applyData.map((data) => (
            <div css={guestMyClassCardContainer}>
              <MoimCard key={data.moimId} guestMyClassData={data} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GuestMyClass;
