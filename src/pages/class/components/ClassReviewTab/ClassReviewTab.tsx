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
      {/* moimReviewList안에 date를 이용해서 sort로 최신순으로 정렬 */}
      {moimReviewList
        ?.sort((a, b) => {
          const dateA = a.date ? new Date(a.date).getTime() : 0; // date가 없으면 0으로 설정
          const dateB = b.date ? new Date(b.date).getTime() : 0; // date가 없으면 0으로 설정
          return dateB - dateA; // 최신순 정렬
        })
        .map((review, i) => <Review key={i} reviewData={review} />)}
    </section>
  );
};

export default ClassReviewTab;
