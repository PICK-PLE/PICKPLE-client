import ClassListCard from '@pages/categories/components/ClassListCard/ClassListCard';
import { CLASSLIST_DATA } from 'src/constants/mocks/classListCardData';

const Card = () => {
  return CLASSLIST_DATA.map((data) => <ClassListCard key={data.moimId} classListData={data} />);
};

export default Card;
