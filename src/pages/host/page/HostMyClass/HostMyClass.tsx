import {
  getTabStyle,
  hostMyClassCardContainer,
  hostMyClassBackground,
  hostMyClassLayout,
  tabWrapper,
  tapLine,
} from './HostMyClass.style';
import { useEffect, useState } from 'react';
import { HostMyClassEmptyView } from '@pages/host/components';
import { hostMyClassCardData } from 'src/constants/mocks/HostMyClassCardData';
import { HostMyClassCard } from '@pages/host/components';

import { Header } from '@components';
import { useFetchHostMoimInfo } from '@apis/domains/moim/useFetchHostMoimInfo';
import { useAtom } from 'jotai';
import { userAtom } from '@stores';
const HostMyClass = () => {
  const [activeTab, setActiveTab] = useState<'진행 중' | '완료'>('진행 중');
  const [moimState, setMoimState] = useState<'ongoing' | 'completed'>('ongoing');

  const [{ hostId }] = useAtom(userAtom);

  /**@정안TODO 현재 서버에서 모임을 전부 제거한 이슈로 useEffect 없어도 되는지 테스트 불가 */
  useEffect(() => {
    setMoimState(!activeTab ? 'ongoing' : 'completed');
  }, [moimState, activeTab, hostId]);

  const handleOngoingTabClick = () => {
    setActiveTab('진행 중');
    setMoimState('ongoing');
  };

  const handleCompletedTabClick = () => {
    setActiveTab('완료');
    setMoimState('completed');
  };

  /**@정안TODO 장정안의 hostId는 5
   * 현재 hostId가 0찍혔다가 null로 오는 이슈가 있음.
   */
  const { data } = useFetchHostMoimInfo(5, moimState || 'ongoing');

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
            {data.map((data) => (
              <HostMyClassCard key={data.moimId} hostMyClassData={data} />
            ))}
          </div>
        )}
      </article>
    </div>
  );
};

export default HostMyClass;
