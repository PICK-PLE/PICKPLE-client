import { HostApplyPage } from '@pages/host/page';
import { ClassPostPage } from '@pages/class/page';
import { HostInfoCard } from '@pages/class/components';
import { ClassListCard } from '@pages/categories/components';
import { CLASSLIST_DATA } from 'src/constants/mocks/classListCardData';

const Card = () => {
  return (
    <div style={{ margin: '0 2rem' }}>
      <HostInfoCard />
      {CLASSLIST_DATA.map((data) => (
        <ClassListCard key={data.moimId} classListData={data} />
      ))}
      <HostApplyPage />;
      <ClassPostPage />
    </div>
  );
};

export default Card;
