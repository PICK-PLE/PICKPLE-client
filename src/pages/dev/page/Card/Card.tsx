import { HostApplyPage } from '@pages/host/page';

const Card = () => {
  return (
    <div style={{ margin: '0 2rem' }}>
      <HostInfoCard />
      {CLASSLIST_DATA.map((data) => (
        <ClassListCard key={data.moimId} classListData={data} />
      ))}
      <HostApplyPage />;
    </div>
  );
};

export default Card;
