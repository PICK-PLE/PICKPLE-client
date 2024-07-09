import { useEffect, useState } from 'react';
import {
  iconStyle,
  selectContainer,
  sortItem,
  sortList,
  placeholderStyle,
  selectedOptionStyle,
} from './Select.style';
import { IcDropDown, IcDropUp } from '@svg';

interface SelectProps {
  placeholder?: string;
}

const options = ['전체', '입금 대기', '승인 대기', '승인 완료', '승인 거절', '환불 완료'];

const Select = ({ placeholder }: SelectProps) => {
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
          {options.map((opt, i) => (
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
