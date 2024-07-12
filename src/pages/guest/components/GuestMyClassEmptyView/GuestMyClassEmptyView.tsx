import { Button } from '@components';
import {
  svgStyle,
  completedTabContainer,
  detailWrapper,
  textStyle,
  textWrapper,
} from './GuestMyClassEmptyView.style';
import { IcGuestMypageEmptyViewIcon } from '@svg';

interface GuestMyClassEmptyViewProps {
  text: string;
}

const GuestMyClassEmptyView = ({ text }: GuestMyClassEmptyViewProps) => {
  return (
    <article css={completedTabContainer}>
      <IcGuestMypageEmptyViewIcon css={svgStyle} />
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
