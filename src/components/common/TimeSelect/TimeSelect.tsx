import React, { useRef, useState } from 'react';
import {
  timeSelectWrapper,
  selectStyle,
  textStyle,
  timeSelectContainer,
  iconStyle,
  labelWrapper,
} from './TimeSelect.style';
import { IcDown } from '@svg';

const TimeSelect = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  const startTimeRef = useRef<HTMLSelectElement>(null);
  const endTimeRef = useRef<HTMLSelectElement>(null);

  const generateTimeOptions = () => {
    return Array.from({ length: 25 }, (_, i) => (
      <option key={i} value={i}>
        {i.toString().padStart(2, '0')}:00
      </option>
    ));
  };

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setStartTime(value);
    if (endTime !== null && value >= endTime) {
      setEndTime(value + 1);
    }
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEndTime(parseInt(e.target.value));
  };

  const focusSelect = (selectRef: React.RefObject<HTMLSelectElement>) => {
    if (selectRef.current && !selectRef.current.disabled) {
      selectRef.current.showPicker();
    }
  };

  return (
    <section css={timeSelectContainer}>
      <div css={timeSelectWrapper}>
        <div css={labelWrapper}>
          <label htmlFor="start-time" css={textStyle}>
            시작 시간
          </label>
          <label htmlFor="start-time" onClick={() => focusSelect(startTimeRef)}>
            <span css={iconStyle} onClick={() => focusSelect(startTimeRef)}>
              <IcDown />
            </span>
          </label>
          <select
            id="start-time"
            ref={startTimeRef}
            css={selectStyle}
            value={startTime ?? ''}
            onChange={handleStartTimeChange}>
            <option value="" disabled>
              선택
            </option>
            {generateTimeOptions()}
          </select>
        </div>
      </div>

      <div css={timeSelectWrapper}>
        <div css={labelWrapper}>
          <label css={textStyle} htmlFor="end-time">
            종료 시간
          </label>
          <span css={iconStyle} onClick={() => focusSelect(endTimeRef)}>
            <IcDown />
          </span>
          <select
            ref={endTimeRef}
            css={selectStyle}
            value={endTime ?? ''}
            id="end-time"
            onChange={handleEndTimeChange}
            disabled={startTime === null}>
            <option value="" disabled>
              선택
            </option>
            {generateTimeOptions().filter(
              (option) => startTime === null || parseInt(option.props.value) > startTime
            )}
          </select>
        </div>
      </div>
    </section>
  );
};

export default TimeSelect;
