import { IcBtnMinus, IcBtnPlus } from '@svg';
import {
  buttonWrapperStyle,
  containerStyle,
  disabledStyle,
  iconStyle,
  minusStyle,
  plusStyle,
} from './CountPeople.style';

interface CountPeopleProps {
  people: number;
  onPeopleChange: (newCount: number) => void;
}

const CountPeople = ({ people, onPeopleChange }: CountPeopleProps) => {
  const handleIncrease = () => {
    if (people < 15) {
      onPeopleChange(people + 1);
    }
  };
  const handleDecrease = () => {
    if (people > 1) {
      onPeopleChange(people - 1);
    }
  };
  return (
    <div css={containerStyle}>
      <div css={[buttonWrapperStyle, people <= 1 && disabledStyle]} onClick={handleDecrease}>
        <IcBtnMinus css={[iconStyle, minusStyle(people)]} />
      </div>
      <div>{people}명</div>
      <div css={[buttonWrapperStyle, people >= 15 && disabledStyle]} onClick={handleIncrease}>
        <IcBtnPlus css={[iconStyle, plusStyle(people)]} />
      </div>
    </div>
  );
};

export default CountPeople;
