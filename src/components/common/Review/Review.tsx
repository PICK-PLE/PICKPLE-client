import { useNavigate } from 'react-router-dom';

import { IcNext } from '@svg';
import { formatCreatedDate } from '@utils';

import {
  iconStyle,
  imgAndTitleContainer,
  imgStyle,
  moimTitleWrapper,
  reviewContent,
  reviewContentContainer,
  reviewImgSection,
  reviewLayoutStyle,
  tagsContainer,
  timeTextStyle,
} from './Review.style';
import ReviewTag from '../ReviewTag/ReviewTag';
import SimpleUserProfile from '../SimpleUserProfile/SimpleUserProfile';

import { components } from '@schema';

type ReviewListGetByMoimResponse = components['schemas']['ReviewListGetByMoimResponse'];
type ReviewListGetByHostResponse = components['schemas']['ReviewListGetByHostResponse'];

interface ReviewProps {
  reviewData: ReviewListGetByMoimResponse | ReviewListGetByHostResponse;
}

const Review = ({ reviewData }: ReviewProps) => {
  const {
    tagList,
    content,
    guestNickname,
    reviewImageUrl,
    guestImageUrl,
    date,
    moimId,
    moimTitle,
  } = reviewData as {
    moimId?: string;
    moimTitle?: string;
    tagList: string[] | undefined;
    content: string;
    guestNickname: string;
    reviewImageUrl: string;
    guestImageUrl: string;
    date: string;
  };
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(`/class/${moimId}`);
  };

  return (
    <div css={reviewLayoutStyle}>
      <SimpleUserProfile size="large" username={guestNickname ?? ''} userImgUrl={guestImageUrl} />
      <div css={reviewContentContainer}>
        <p css={reviewContent}>{content}</p>
        <div css={tagsContainer}>
          {tagList &&
            tagList
              .filter((tag: string) => tag !== 'null')
              .map((tag: string, i: number) => <ReviewTag key={i}>{tag}</ReviewTag>)}
        </div>
      </div>
      <div css={imgAndTitleContainer}>
        {reviewImageUrl && (
          <div css={reviewImgSection}>
            <img css={imgStyle} src={reviewImageUrl} alt="리뷰 이미지" />
          </div>
        )}
        {/* 클래스 뷰, 스픽커 소개뷰에서 모두 사용하기 위해 api에서 moimId 유무에 따라 보여주기 위함 */}
        {moimTitle !== undefined && (
          <div css={moimTitleWrapper} onClick={handleTitleClick}>
            {moimTitle}
            <span css={iconStyle}>
              <IcNext />
            </span>
          </div>
        )}
      </div>
      <span css={timeTextStyle}>{formatCreatedDate(date ?? '')}</span>
    </div>
  );
};

export default Review;
