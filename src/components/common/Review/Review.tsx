import { useNavigate } from 'react-router-dom';

import { IcNext } from '@svg';

import {
  iconStyle,
  imgAndTitleContainer,
  moimTitleWrapper,
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
const moimId = 1;
const moimTitle = '티엘고마가 알려주는 클래스 성공 비법';

const Review = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(`/class/${moimId}`);
  };
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
      <div css={imgAndTitleContainer}>
        <div css={reviewImgSection}></div>
        {/* 클래스 뷰, 스픽커 소개뷰에서 모두 사용하기 위해 api에서 moimId 유무에 따라 보여주기 위함 */}
        {moimId ? (
          <div css={moimTitleWrapper} onClick={handleTitleClick}>
            {moimTitle}
            <span css={iconStyle}>
              <IcNext />
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
      <span>14시간 전</span>
    </div>
  );
};

export default Review;
