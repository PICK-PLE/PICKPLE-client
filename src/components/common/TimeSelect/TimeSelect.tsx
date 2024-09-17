import { useState, useRef } from 'react';

import { IcDropdownPlatformDown } from '@svg';

import {
  timeSelectContainer,
  timeSelectWrapper,
  selectStyle,
  textStyle,
  iconStyle,
  labelWrapper,
  svgStyle,
  dropdownStyle,
  optionStyle,
} from './TimeSelect.style';

interface TimeselectProps {
  startTime: number | null;
  endTime: number | null;
  onStartTimeChange: (time: number) => void;
  onEndTimeChange: (time: number) => void;
}

type dropdownType = 'start' | 'end';

const TimeSelect = ({
  startTime,
  endTime,
  onStartTimeChange,
  onEndTimeChange,
}: TimeselectProps) => {
  const [startDropdownOpen, setStartDropdownOpen] = useState(false);
  const [endDropdownOpen, setEndDropdownOpen] = useState(false);
  const startTimeRef = useRef<HTMLDivElement>(null);
  const endTimeRef = useRef<HTMLDivElement>(null);

  const generateTimeOptions = () => {
    return Array.from({ length: 25 }, (_, i) => ({
      value: i,
      label: `${i.toString().padStart(2, '0')}:00`,
    }));
  };

  const handleStartTimeChange = (value: number) => {
    onStartTimeChange(value);
    setStartDropdownOpen(false);
    if (endTime !== null && value >= endTime) {
      onEndTimeChange(value + 1);
    }
  };

  const handleEndTimeChange = (value: number) => {
    onEndTimeChange(value);
    setEndDropdownOpen(false);
  };

  const toggleDropdown = (dropdownType: dropdownType) => {
    if (dropdownType === 'start') {
      setStartDropdownOpen(!startDropdownOpen);
      setEndDropdownOpen(false);
    } else {
      setEndDropdownOpen(!endDropdownOpen);
      setStartDropdownOpen(false);
    }
  };

  return (
    <section css={timeSelectContainer}>
      <div css={timeSelectWrapper} ref={startTimeRef} onClick={() => toggleDropdown('start')}>
        <div css={labelWrapper}>
          <label css={textStyle}>시작 시간</label>
          <div css={selectStyle(Boolean(startTime))}>
            <span>{startTime !== null ? generateTimeOptions()[startTime].label : '선택'}</span>
            <span css={iconStyle}>
              <IcDropdownPlatformDown css={svgStyle(Boolean(startTime))} />
            </span>
          </div>
          {startDropdownOpen && (
            <div css={dropdownStyle}>
              {generateTimeOptions().map((option) => (
                <div
                  key={option.value}
                  css={optionStyle}
                  onClick={() => handleStartTimeChange(option.value)}>
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div css={timeSelectWrapper} ref={endTimeRef}>
        <div css={labelWrapper} onClick={() => startTime !== null && toggleDropdown('end')}>
          <label css={textStyle}>종료 시간</label>
          <div css={selectStyle(Boolean(endTime))}>
            <span>{endTime !== null ? generateTimeOptions()[endTime].label : '선택'}</span>
            <span css={iconStyle}>
              <IcDropdownPlatformDown css={svgStyle(Boolean(endTime))} />
            </span>
          </div>
          {endDropdownOpen && (
            <div css={dropdownStyle}>
              {generateTimeOptions()
                .filter((option) => startTime === null || option.value > startTime)
                .map((option) => (
                  <div
                    key={option.value}
                    css={optionStyle}
                    onClick={() => handleEndTimeChange(option.value)}>
                    {option.label}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TimeSelect;
