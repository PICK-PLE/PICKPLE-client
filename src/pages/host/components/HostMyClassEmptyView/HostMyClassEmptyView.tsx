import { Button } from '@components';
import {
  buttonWrapper,
  completedTabContainer,
  IcHostMyClassStyle,
  textStyle,
} from './HostMyClassEmptyView.style';
import { IcHostMypage } from '@svg';
import { useNavigate } from 'react-router-dom';

interface HostMyClassEmptyViewProps {
  text: string;
}

const HostMyClassEmptyView = ({ text }: HostMyClassEmptyViewProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/class/post/step1');
  };
  return (
    <article css={completedTabContainer}>
      <IcHostMypage css={IcHostMyClassStyle} />
      <p css={textStyle}>{text}</p>
      <p css={textStyle}>지금 바로 모임을 개설해 보세요!</p>
      <div css={buttonWrapper}>
        <Button variant="round" onClick={handleButtonClick}>
          클래스 모임 개설하기
        </Button>
      </div>
    </article>
  );
};

export default HostMyClassEmptyView;
