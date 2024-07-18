import { Button } from '@components';
import {
  completedTabContainer,
  detailWrapper,
  textStyle,
  textWrapper,
  svgStyle,
} from './GuestMyClassEmptyView.style';
import { graphicImage, routePath } from '@constants';
import { useNavigate } from 'react-router-dom';

interface GuestMyClassEmptyViewProps {
  text: string;
}

const GuestMyClassEmptyView = ({ text }: GuestMyClassEmptyViewProps) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(routePath.CATEGORY);
  };
  return (
    <article css={completedTabContainer}>
      <img src={graphicImage.GuestMyPageImage} alt="게스트 마이페이지 이미지" css={svgStyle} />
      <div css={detailWrapper}>
        <div css={textWrapper}>
          <p css={textStyle}>{text}</p>
          <p css={textStyle}>다양한 클래스 모임을 둘러보세요:{')'}</p>
        </div>
        <Button variant="round" onClick={handleButtonClick}>
          클래스 모임 둘러보기
        </Button>
      </div>
    </article>
  );
};

export default GuestMyClassEmptyView;
