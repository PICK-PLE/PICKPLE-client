import { useAtom } from 'jotai';
import { useState } from 'react';


import { useFetchHostMoimInfo } from '@apis/domains/moim/useFetchHostMoimInfo';

import { Header, Spinner } from '@components';
import { HostMyClassEmptyView, HostMyClassCard } from '@pages/host/components';
import { userAtom } from '@stores';

import {
  getTabStyle,
  hostMyClassCardContainer,
  hostMyClassBackground,
  hostMyClassLayout,
  tabWrapper,
} from './HostMyClass.style';
const HostMyClass = () => {
  const [activeTab, setActiveTab] = useState<'진행 중' | '완료'>('진행 중');
  const [moimState, setMoimState] = useState<'ongoing' | 'completed'>('ongoing');

  const [{ hostId }] = useAtom(userAtom);

  const handleOngoingTabClick = () => {
    setActiveTab('진행 중');
    setMoimState('ongoing');
  };

  const handleCompletedTabClick = () => {
    setActiveTab('완료');
    setMoimState('completed');
  };

  const { data, isLoading } = useFetchHostMoimInfo(hostId ?? 0, moimState);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div css={hostMyClassBackground}>
      <Header title="my 클래스 모임" />
      <article css={hostMyClassLayout}>
        <div css={tabWrapper}>
          <div css={getTabStyle(activeTab === '진행 중')} onClick={handleOngoingTabClick}>
            진행 중
          </div>
          <div css={getTabStyle(activeTab === '완료')} onClick={handleCompletedTabClick}>
            완료
          </div>
        </div>

        {data?.length === 0 ? (
          <HostMyClassEmptyView
            text={activeTab === '진행 중' ? `아직 진행 중인 모임이 없어요` : `완료한 모임이 없어요`}
          />
        ) : (
          <div css={hostMyClassCardContainer}>
            {data?.map((data) => (
              <HostMyClassCard key={data.moimId} hostMyClassData={data} />
            ))}
          </div>
        )}
      </article>
    </div>
  );
};

export default HostMyClass;
