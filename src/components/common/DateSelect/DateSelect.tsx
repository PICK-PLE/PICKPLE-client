import React, { InputHTMLAttributes } from 'react';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import {
  dataPickerWrapper,
  customInputContainer,
  customInputLabel,
  customInputStyle,
  iconStyle,
} from './DateSelect.style';
import { IcDropdownPlatformDown } from '@svg';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

interface DateSelectProps {
  selected: dayjs.Dayjs | null;
  onChange: (date: dayjs.Dayjs | null) => void;
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
  const today = dayjs();
  const minSelectableDate = today.add(3, 'day');

  return (
    <div css={dataPickerWrapper}>
      <DatePicker
        selected={selected ? selected.toDate() : null}
        onChange={(date) => onChange(date ? dayjs(date) : null)}
        placeholderText={`YYYY.MM.DD`}
        dateFormat="yyyy.MM.dd"
        minDate={minSelectableDate.toDate()}
        customInput={
          <CustomInput
            value={selected ? selected.format('YYYY.MM.DD') : ''}
            placeholder="YYYY.MM.DD"
          />
        }
        locale={ko}
      />
    </div>
  );
};

export default DateSelect;
