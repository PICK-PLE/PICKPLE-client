import { useNavigate } from 'react-router-dom';

import { Button } from '@components';
import { graphicImage, routePath } from '@constants';

import {
  completedTabContainer,
  textStyle,
  textWrapper,
  svgStyle,
  buttonWrapper,
} from './GuestMyClassEmptyView.style';

interface GuestMyClassEmptyViewProps {
  text: string;
}

const GuestMyClassEmptyView = ({ text }: GuestMyClassEmptyViewProps) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(routePath.CLASS_LIST);
  };
  return (
    <article css={completedTabContainer}>
      <img src={graphicImage.GuestMyPageImage} alt="게스트 마이페이지 이미지" css={svgStyle} />
      <div css={textWrapper}>
        <p css={textStyle}>{text}</p>
        <p css={textStyle}>다양한 클래스를 둘러보세요:{')'}</p>
      </div>
      <div css={buttonWrapper}>
        <Button variant="round" onClick={handleButtonClick}>
          클래스 둘러보기
        </Button>
      </div>
    </article>
  );
};

export default GuestMyClassEmptyView;
