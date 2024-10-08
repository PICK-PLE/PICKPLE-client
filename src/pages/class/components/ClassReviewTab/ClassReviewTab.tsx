import { useFetchMoimReviewList } from '@apis/domains/review/useFetchMoimReviewList';

import Review from 'src/components/common/Review/Review';

import { reviewSectionStyle } from './ClassReviewTab.style';
import ClassReviewEmptyView from '../ClassReviewEmptyView/ClassReviewEmptyView';

interface ClassReviewTabProps {
  moimId: string;
}

const ClassReviewTab = ({ moimId }: ClassReviewTabProps) => {
  const { data: moimReviewList } = useFetchMoimReviewList(moimId ?? '');

  if ((moimReviewList || []).length === 0) {
    return <ClassReviewEmptyView />;
  }
  return (
    <section css={reviewSectionStyle}>
      {/* reverse메서드로 최신순으로 정렬 */}
      {moimReviewList?.map((review, i) => <Review key={i} reviewData={review} />).reverse()}
    </section>
  );
};

export default ClassReviewTab;
