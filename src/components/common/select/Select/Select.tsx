import { useState } from 'react';

import { IcDropdownPlatformDown, IcDropdownPlatformUp } from '@svg';

import {
  iconStyle,
  placeholderStyle,
  selectContainer,
  selectedOptionStyle,
  sortItem,
  sortList,
} from './Select.style';

interface SelectProps {
  placeholder?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Select = ({ placeholder, options, value, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    onChange(option)
    setIsOpen(false);
  };

  const isPlaceholder = value === '';

  return (
    <div css={selectContainer} onClick={toggleDropdown}>
      <span css={isPlaceholder ? placeholderStyle : selectedOptionStyle}>{value ? value : placeholder}</span>
      <span css={iconStyle}>{isOpen ? <IcDropdownPlatformUp /> : <IcDropdownPlatformDown />}</span>
      {isOpen && (
        <ul css={sortList}>
          {options?.map((opt, i) => (
            <li css={sortItem} key={i} onClick={() => handleOptionClick(opt)}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
