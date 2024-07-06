import { IcCountCircle, IcMinus, IcPlus } from '@svg';
import React, { useState } from 'react';
import {
  buttonWrapperStyle,
  containerStyle,
  countCircleStyle,
  plusAndMinusIconStyle,
} from './CountPeople.style';

interface CountPeopleProps {
  initialPeople: number;
}

const CountPeople = ({ initialPeople }: CountPeopleProps) => {
  const [people, setPeople] = useState(initialPeople);
  const handleIncrease = () => {
    setPeople((prev) => (prev < 15 ? prev + 1 : prev));
  };
  const handleDecrease = () => {
    setPeople((prev) => (prev > 1 ? prev - 1 : 1));
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
