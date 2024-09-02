import {
  reviewContent,
  reviewContentContainer,
  reviewImgSection,
  reviewLayoutStyle,
  tagsContainer,
} from './Review.style';
import ReviewTag from '../ReviewTag/ReviewTag';
import SimpleUserProfile from '../SimpleUserProfile/SimpleUserProfile';

const tags = [
  '전문성이 있어요',
  '진행이 매끄러워요',
  '준비가 철저해요',
  '시간 관리를 잘해요',
  '게스트의 반응을 잘 반영해요',
];

const Review = () => {
  return (
    <div css={reviewLayoutStyle}>
      <SimpleUserProfile size="large" username="갓민서입니다롱" />
      <div css={reviewContentContainer}>
        <p css={reviewContent}>
          리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰
          내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다.
        </p>
        <div css={tagsContainer}>
          {tags.map((tag, i) => (
            <ReviewTag key={i}>{tag}</ReviewTag>
          ))}
        </div>
      </div>
      <div css={reviewImgSection}></div>
      <span>14시간 전</span>
    </div>
  );
};

export default Review;
