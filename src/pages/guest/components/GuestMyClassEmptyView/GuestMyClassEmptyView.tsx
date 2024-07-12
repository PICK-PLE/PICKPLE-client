import { Image, Button } from '@components';
import {
  completedTabContainer,
  detailWrapper,
  textStyle,
  textWrapper,
} from './GuestMyClassEmptyView.style';

interface GuestMyClassEmptyViewProps {
  text: string;
}

const GuestMyClassEmptyView = ({ text }: GuestMyClassEmptyViewProps) => {
  return (
    <article css={completedTabContainer}>
      <Image width="12rem" src="https://picsum.photos/120" />
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
