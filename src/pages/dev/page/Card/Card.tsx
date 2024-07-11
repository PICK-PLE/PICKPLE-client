import ClassListCard from '@pages/categories/components/ClassListCard/ClassListCard';
import { CLASSLIST_DATA } from '@pages/categories/components/ClassListCard/classListData';

const Card = () => {
  return CLASSLIST_DATA.map((data) => <ClassListCard key={data.moimId} classListData={data} />);
};

export default Card;
