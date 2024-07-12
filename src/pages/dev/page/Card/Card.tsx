// import HostInfoCard from '@pages/class/components/HostInfoCard/HostInfoCard';
// import ClassListCard from '@pages/categories/components/ClassListCard/ClassListCard';
// import { CLASSLIST_DATA } from 'src/constants/mocks/classListCardData';
// import { CATEGORY_ICON } from '@constants';
import { HostApplyPage } from '@pages/host/page';

const Card = () => {
  return (
    // <div style={{ margin: '0 2rem' }}>
    //   <HostInfoCard />
    //   {CLASSLIST_DATA.map((data) => (
    //     <ClassListCard key={data.moimId} classListData={data} />
    //   ))}
    //   <img src={CATEGORY_ICON.njob.fill_selected} css={{ width: '20px', height: '20px' }} />
    //   <img src={CATEGORY_ICON.lifestyle.fill_selected} css={{ width: '20px', height: '20px' }} />
    // </div>
    <HostApplyPage />
  );
};

export default Card;
