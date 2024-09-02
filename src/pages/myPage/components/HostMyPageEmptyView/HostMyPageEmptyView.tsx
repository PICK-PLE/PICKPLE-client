import { graphicImage } from '@constants';
import {
  buttonWrapper,
  hostMyPageEmptyViewContainer,
  hostMyPageEmptyViewWrapper,
  imageStyle,
  textStyle,
} from './HostMyPageEmptyView.style';
import { Button } from '@components';
import { useNavigate } from 'react-router-dom';

const HostMyPageEmptyView = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/host/apply/step1`);
  };
  return (
    <div css={hostMyPageEmptyViewContainer}>
      <img css={imageStyle} src={graphicImage.HostApplyImage} alt="HostMyPageImage" />
      <div css={hostMyPageEmptyViewWrapper}>
        <p css={textStyle}>아직 스픽커로 등록되어 있지 않아요</p>
        <p css={textStyle}>스픽커가 되어 다양한 참가자들을 만나 보세요!</p>
      </div>
      <div css={buttonWrapper}>
        <Button variant="round" onClick={handleButtonClick}>
          스픽커 신청하러 가기
        </Button>
      </div>
    </div>
  );
};

export default HostMyPageEmptyView;
