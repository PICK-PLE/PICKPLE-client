import React, { useState } from 'react';
import { timeSelectWrapper, selectStyle, textStyle, timeSelectContainer } from './TimeSelect.style';

const TimeSelect = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  const generateOptions = () => {
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

  return (
    <>
      <section css={timeSelectContainer}>
        <div css={timeSelectWrapper}>
          <div>
            <label css={textStyle}>시작 시간</label>
            <select css={selectStyle} value={startTime ?? ''} onChange={handleStartTimeChange}>
              <option value="" disabled>
                선택
              </option>
              {generateOptions()}
            </select>
          </div>
        </div>

        <div css={timeSelectWrapper}>
          <div>
            <label css={textStyle}>종료 시간</label>
            <select
              css={selectStyle}
              value={endTime ?? ''}
              onChange={handleEndTimeChange}
              disabled={startTime === null}>
              <option value="" disabled>
                선택
              </option>
              {generateOptions().filter(
                (option) => startTime === null || parseInt(option.props.value) > startTime
              )}
            </select>
          </div>
        </div>
      </section>
    </>
  );
};

export default TimeSelect;
