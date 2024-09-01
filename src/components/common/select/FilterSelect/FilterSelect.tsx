import { useState } from 'react';

import { IcDropdownDown, IcDropdownUp } from '@svg';

import {
  iconStyle,
  selectContainer,
  sortItem,
  sortList,
  selectedOptionStyle,
} from './FilterSelect.style';

interface SelectProps {
  options: string[];
  onOptionSelect: (option: string) => void;
}

const FilterSelect = ({ options, onOptionSelect }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionSelect(option);
  };

  return (
    <div css={selectContainer} onClick={toggleDropdown}>
      <span css={selectedOptionStyle}>{selectedOption}</span>
      <span css={iconStyle}>{isOpen ? <IcDropdownUp /> : <IcDropdownDown />}</span>
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

export default FilterSelect;
