import { IcCountCircle, IcMinus, IcPlus } from '@svg';
import {
  buttonWrapperStyle,
  containerStyle,
  countCircleStyle,
  plusAndMinusIconStyle,
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
      <div css={buttonWrapperStyle} onClick={handleDecrease}>
        <IcCountCircle css={countCircleStyle} />
        <IcMinus css={plusAndMinusIconStyle} />
      </div>
      <div>{people}명</div>
      <div css={buttonWrapperStyle} onClick={handleIncrease}>
        <IcCountCircle css={countCircleStyle} />
        <IcPlus css={plusAndMinusIconStyle} />
      </div>
    </div>
  );
};

export default CountPeople;
