import { ClassPostPage } from '@pages/class/page';
import { HostApplyPage } from '@pages/host/page';
// import { HostInfoCard } from '@pages/class/components';

const Card = () => {
  return (
    <div style={{ margin: '0 2rem' }}>
      {/* <HostInfoCard /> */}
      <HostApplyPage />;
      <ClassPostPage />
    </div>
  );
};

export default Card;
