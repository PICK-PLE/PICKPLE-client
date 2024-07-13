import HostInfoCard from '@pages/class/components/HostInfoCard/HostInfoCard';
import ClassListCard from '@pages/categories/components/ClassListCard/ClassListCard';
import { CLASSLIST_DATA } from 'src/constants/mocks/classListCardData';
import { CATEGORY_ICON } from 'src/constants/category';

const Card = () => {
  return (
    <div style={{ margin: '0 2rem' }}>
      <HostInfoCard />
      {CLASSLIST_DATA.map((data) => (
        <ClassListCard key={data.moimId} classListData={data} />
      ))}
    </div>
  );
};

export default Card;
