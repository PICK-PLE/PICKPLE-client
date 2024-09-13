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
      {moimReviewList?.map((review, i) => <Review key={i} reviewData={review} />)}
    </section>
  );
};

export default ClassReviewTab;
