import { Header } from '@components';
import {
  getTabStyle,
  hostMyClassCardContainer,
  hostMyPageBackground,
  hostMyPageLayout,
  tabWrapper,
  tapLine,
} from './HostMyPage.style';
import { useState } from 'react';
import { HostMyPageEmptyView } from '@pages/myPage/components';
import { hostMyClassCardData } from 'src/constants/mocks/HostMyClassCardData';
import { HostMyClassCard } from '@pages/host/components';

const HostMyPage = () => {
  const [activeTab, setActiveTab] = useState<'진행 중' | '완료'>('진행 중');

  return (
    <div css={hostMyPageBackground}>
      <Header title="my 클래스 모임" />
      <article css={hostMyPageLayout}>
        <div css={tapLine} />
        <div css={tabWrapper}>
          <div css={getTabStyle(activeTab === '진행 중')} onClick={() => setActiveTab('진행 중')}>
            진행 중
          </div>
          <div css={getTabStyle(activeTab === '완료')} onClick={() => setActiveTab('완료')}>
            완료
          </div>
        </div>
      </article>

      {hostMyClassCardData.length !== 0 ? (
        <HostMyPageEmptyView text={activeTab === '진행 중' && '아직 진행 중인 모임이 없어요'} />
      ) : (
        <div css={hostMyClassCardContainer}>
          {hostMyClassCardData.map((data) => (
            <HostMyClassCard key={data.moimId} hostMyClassData={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HostMyPage;
