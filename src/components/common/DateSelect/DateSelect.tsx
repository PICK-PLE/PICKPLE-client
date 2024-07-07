import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import {
  DataPickerWrapper,
  customInputContainer,
  customInputLabel,
  customInputStyle,
  iconStyle,
} from './DateSelect.style';
import React from 'react';
import { IcAccordion } from '@svg';

// interface DateSelectProps {}

const CustomInput = React.forwardRef(({ value, onClick, placeholder }, ref) => (
  <div css={customInputContainer} onClick={onClick}>
    <div css={customInputLabel}>모임 날짜</div>
    <IcAccordion css={iconStyle} />
    <input css={customInputStyle} ref={ref} value={value} readOnly placeholder={placeholder} />
  </div>
));

const DateSelect = () => {
  const [moimDate, setMoimDate] = useState<Date | null>();
  //   const minSelectableDate = addDays(new Date(), 5);
  return (
    <div css={DataPickerWrapper}>
      <DatePicker
        selected={moimDate}
        onChange={(date) => setMoimDate(date)}
        placeholderText={`YYYY.MM.DD`}
        dateFormat="yyyy.MM.dd"
        minDate={new Date(5)}
        customInput={<CustomInput />}
      />
    </div>
  );
};

export default DateSelect;
