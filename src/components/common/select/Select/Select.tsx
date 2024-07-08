import { HTMLAttributes, useState } from 'react';
import { iconStyle, selectContainer, sortItem, sortList } from './Select.style';

interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon: React.ReactNode;
}

const options = ['전체', '입금 대기', '승인 대기', '승인 완료', '승인 거절', '환불 완료'];

const Select = ({ icon }: SelectProps) => {
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
      {selectedOption}
      <span css={iconStyle}>{icon}</span>
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
