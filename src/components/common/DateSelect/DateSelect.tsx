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
import { ko } from 'date-fns/locale';

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  placeholder: string;
}

interface DateSelectProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
}
const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, placeholder }, ref) => (
    <div css={customInputContainer} onClick={onClick}>
      <div css={customInputLabel}>모임 날짜</div>
      <IcAccordion css={iconStyle} />
      <input css={customInputStyle} ref={ref} value={value} readOnly placeholder={placeholder} />
    </div>
  )
);

const DateSelect = ({ selected, onChange }: DateSelectProps) => {
  const today = new Date();
  const minSelectableDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5);

  return (
    <div css={DataPickerWrapper}>
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
