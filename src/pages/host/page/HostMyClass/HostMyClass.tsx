import {
  getTabStyle,
  hostMyClassCardContainer,
  hostMyClassBackground,
  hostMyClassLayout,
  tabWrapper,
  tapLine,
} from './HostMyClass.style';
import { useState } from 'react';
import { HostMyClassEmptyView } from '@pages/host/components';
import { hostMyClassCardData } from 'src/constants/mocks/HostMyClassCardData';
import { HostMyClassCard } from '@pages/host/components';

import { Header } from '@components';
import { useFetchHostMoimInfo } from '@apis/domains/moim/useFetchHostMoimInfo';
const HostMyClass = () => {
  const [activeTab, setActiveTab] = useState<'진행 중' | '완료'>('진행 중');
  const [moimState, setMoimState] = useState<'ongoing' | 'completed'>('ongoing');

  const handleOngoingTabClick = () => {
    setActiveTab('진행 중');
    setMoimState('ongoing');
  };

  const handleCompletedTabClick = () => {
    setActiveTab('완료');
    setMoimState('completed');
  };

  /**@정안TODO 현재 서버에서 hostId는 1로만 구현하랍니다 */
  const hostId = 6;
  const { data } = useFetchHostMoimInfo(hostId, moimState);

  if (!data) {
    return <div>no data</div>;
  }

  return (
    <div css={hostMyClassBackground}>
      <Header title="my 클래스 모임" />
      <article css={hostMyClassLayout}>
        <div css={tapLine} />
        <div css={tabWrapper}>
          <div css={getTabStyle(activeTab === '진행 중')} onClick={handleOngoingTabClick}>
            진행 중
          </div>
          <div css={getTabStyle(activeTab === '완료')} onClick={handleCompletedTabClick}>
            완료
          </div>
        </div>

        {hostMyClassCardData.length === 0 ? (
          <HostMyClassEmptyView text="아직 진행 중인 모임이 없어요" />
        ) : (
          <div css={hostMyClassCardContainer}>
            {data.data.map((data) => (
              <HostMyClassCard key={data.moimId} hostMyClassData={data} />
            ))}
          </div>
        )}
      </article>
    </div>
  );
};

export default HostMyClass;
