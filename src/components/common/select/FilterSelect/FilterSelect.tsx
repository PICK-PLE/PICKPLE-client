import { useState } from 'react';
import {
  iconStyle,
  selectContainer,
  sortItem,
  sortList,
  selectedOptionStyle,
} from './FilterSelect.style';
import { IcDropdownDown, IcDropdownUp } from '@svg';

interface SelectProps {
  options: string[];
}

const FilterSelect = ({ options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div css={selectContainer} onClick={toggleDropdown}>
      <span css={selectedOptionStyle}>{selectedOption}</span>
      <span css={iconStyle}>{isOpen ? <IcDropdownDown /> : <IcDropdownUp />}</span>
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
