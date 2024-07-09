import { useEffect, useState } from 'react';
import {
  iconStyle,
  placeholderStyle,
  selectContainer,
  selectedOptionStyle,
  sortItem,
  sortList,
} from './Select.style';
import { IcDropDown, IcDropUp } from '@svg';

interface SelectProps {
  placeholder?: string;
  options: string[];
}

const Select = ({ placeholder, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder || options[0]);

  useEffect(() => {
    if (placeholder) {
      setSelectedOption(placeholder);
    }
  }, [placeholder]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const isPlaceholder = selectedOption === placeholder;

  return (
    <div css={selectContainer} onClick={toggleDropdown}>
      <span css={isPlaceholder ? placeholderStyle : selectedOptionStyle}>{selectedOption}</span>
      <span css={iconStyle}>{isOpen ? <IcDropUp /> : <IcDropDown />}</span>
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
