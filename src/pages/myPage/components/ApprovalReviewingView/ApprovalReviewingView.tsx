import { graphicImage } from '@constants';

import {
  hostMyPageEmptyViewContainer,
  hostMyPageEmptyViewWrapper,
  imageStyle,
  textStyle,
} from './ApprovalReviewingView.style';

const HostMyPageEmptyView = () => {
  return (
    <div css={hostMyPageEmptyViewContainer}>
      <img css={imageStyle} src={graphicImage.HostApplyImage} alt="HostMyPageImage" />
      <div css={hostMyPageEmptyViewWrapper}>
        <p css={textStyle}>보내주신 신청서를 꼼꼼히 살펴보는 중이에요!</p>
        <p css={textStyle}>스픽커 승인 결과는 메일로 안내 드릴게요</p>
      </div>
    </div>
  );
};

export default HostMyPageEmptyView;
