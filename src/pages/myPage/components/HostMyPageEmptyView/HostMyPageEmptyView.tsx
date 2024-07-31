import { useNavigate } from 'react-router-dom';

import { Button } from '@components';
import { graphicImage } from '@constants';

import {
  buttonWrapper,
  hostMyPageEmptyViewContainer,
  hostMyPageEmptyViewWrapper,
  imageStyle,
  textStyle,
} from './HostMyPageEmptyView.style';

const HostMyPageEmptyView = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/host/apply/step1`);
  };
  return (
    <div css={hostMyPageEmptyViewContainer}>
      <img css={imageStyle} src={graphicImage.HostApplyImage} alt="HostMyPageImage" />
      <div css={hostMyPageEmptyViewWrapper}>
        <p css={textStyle}>아직 호스트로 등록되어 있지 않아요</p>
        <p css={textStyle}>호스트가 되어 다양한 게스트들을 만나 보세요!</p>
      </div>
      <div css={buttonWrapper}>
        <Button variant="round" onClick={handleButtonClick}>
          호스트 신청하러 가기
        </Button>
      </div>
    </div>
  );
};

export default HostMyPageEmptyView;
