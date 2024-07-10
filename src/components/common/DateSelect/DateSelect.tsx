import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import {
  dataPickerWrapper,
  customInputContainer,
  customInputLabel,
  customInputStyle,
  iconStyle,
} from './DateSelect.style';
import React, { InputHTMLAttributes } from 'react';
import { IcDropdownPlatformDown } from '@svg';
import { ko } from 'date-fns/locale';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

interface DateSelectProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
}
const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, placeholder }, ref) => (
    <div css={customInputContainer} onClick={onClick}>
      <label css={customInputLabel}>모임 날짜</label>
      <IcDropdownPlatformDown css={iconStyle} />
      <input css={customInputStyle} ref={ref} value={value} readOnly placeholder={placeholder} />
    </div>
  )
);

const DateSelect = ({ selected, onChange }: DateSelectProps) => {
  const today = new Date();
  const minSelectableDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3);

  return (
    <div css={dataPickerWrapper}>
      <DatePicker
        selected={selected}
        onChange={onChange}
        placeholderText={`YYYY.MM.DD`}
        dateFormat="yyyy.MM.dd"
        minDate={minSelectableDate}
        customInput={
          <CustomInput
            value={selected ? selected.toLocaleDateString() : ''}
            placeholder="YYYY.MM.DD"
          />
        }
        locale={ko}
      />
    </div>
  );
};

export default DateSelect;
