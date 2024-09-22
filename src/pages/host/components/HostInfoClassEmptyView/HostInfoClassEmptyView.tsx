import { useNavigate } from 'react-router-dom';

import { Button } from '@components';
import { IcHostMypage } from '@svg';

import {
  buttonWrapper,
  completedTabContainer,
  IcHostMyClassStyle,
  textStyle,
  textWrapper,
} from './HostInfoClassEmptyView.style';

const HostInfoClassEmptyView = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/class/post/step1');
  };
  return (
    <article css={completedTabContainer}>
      <IcHostMypage css={IcHostMyClassStyle} />
      <div css={textWrapper}>
        <p css={textStyle}>아직 개설한 클래스가 없어요</p>
        <p css={textStyle}>지금 바로 클래스를 개설해 보세요!</p>
      </div>

      <div css={buttonWrapper}>
        <Button variant="round" onClick={handleButtonClick}>
          클래스 개설하기
        </Button>
      </div>
    </article>
  );
};

export default HostInfoClassEmptyView;
