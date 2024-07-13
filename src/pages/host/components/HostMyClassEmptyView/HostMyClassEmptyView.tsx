import { Button } from '@components';
import {
  completedTabContainer,
  detailWrapper,
  IcHostMyClassStyle,
  textStyle,
  textWrapper,
} from './HostMyClassEmptyView.style';
import { IcHostMypage } from '@svg';

interface HostMyClassEmptyViewProps {
  text: string;
}

const HostMyClassEmptyView = ({ text }: HostMyClassEmptyViewProps) => {
  return (
    <article css={completedTabContainer}>
      <IcHostMypage css={IcHostMyClassStyle} />
      <div css={detailWrapper}>
        <div css={textWrapper}>
          <p css={textStyle}>{text}</p>
          <p css={textStyle}>다양한 클래스 모임을 둘러보세요:{')'}</p>
        </div>
        <Button variant="round">클래스 모임 개설하기</Button>
      </div>
    </article>
  );
};

export default HostMyClassEmptyView;
