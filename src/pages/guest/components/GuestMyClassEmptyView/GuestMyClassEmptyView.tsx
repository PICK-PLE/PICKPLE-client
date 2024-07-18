import { Button } from '@components';
import {
  completedTabContainer,
  detailWrapper,
  textStyle,
  textWrapper,
  svgStyle,
} from './GuestMyClassEmptyView.style';
import { graphicImage } from '@constants';

interface GuestMyClassEmptyViewProps {
  text: string;
}

const GuestMyClassEmptyView = ({ text }: GuestMyClassEmptyViewProps) => {
  return (
    <article css={completedTabContainer}>
      <img src={graphicImage.GuestMyPageImage} alt="게스트 마이페이지 이미지" css={svgStyle} />
      <div css={detailWrapper}>
        <div css={textWrapper}>
          <p css={textStyle}>{text}</p>
          <p css={textStyle}>다양한 클래스 모임을 둘러보세요:{')'}</p>
        </div>
        <Button variant="round">클래스 모임 둘러보기</Button>
      </div>
    </article>
  );
};

export default GuestMyClassEmptyView;
