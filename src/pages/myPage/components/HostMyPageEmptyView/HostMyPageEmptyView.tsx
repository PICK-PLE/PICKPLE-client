import { graphicImage } from '@constants';
import {
  hostMyPageEmptyViewContainer,
  hostMyPageEmptyViewWrapper,
  imageStyle,
  textStyle,
} from './HostMyPageEmptyView.style';
import { Button } from '@components';

const HostMyPageEmptyView = () => {
  return (
    <>
      <div css={hostMyPageEmptyViewContainer}>
        <img css={imageStyle} src={graphicImage.HostApplyImage} alt="HostMyPageImage" />
        <div css={hostMyPageEmptyViewWrapper}>
          <p css={textStyle}>아직 호스트로 등록되어 있지 않아요</p>
          <p css={textStyle}>호스트가 되어 다양한 게스트들을 만나 보세요!</p>
        </div>
        <Button variant="round" onClick={() => {}}>
          호스트 신청하러 가기
        </Button>
      </div>
    </>
  );
};

export default HostMyPageEmptyView;
