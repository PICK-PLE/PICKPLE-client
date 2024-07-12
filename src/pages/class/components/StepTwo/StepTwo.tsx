import { StepProps } from 'src/types/nextStep';
import { headerStyle, layoutStyle, subTitleStyle, titleStyle } from './StepTwo.style';

const StepTwo = ({ onNext }: StepProps) => {
  const handleNextClick = () => {
    onNext();
  };
  return (
    <div css={layoutStyle}>
      <header css={headerStyle}>
        <h4 css={titleStyle}>호스트 신청</h4>
        <h1 css={subTitleStyle}>호스트님에 대해 알려주세요!</h1>
      </header>
    </div>
  );
};

export default StepTwo;
