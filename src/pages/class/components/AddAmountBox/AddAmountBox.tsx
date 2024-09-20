import { Input } from '@components';

import {
  addAmountBoxContainer,
  amountBoxWrapper,
  addButtonStyle,
  addBoxWrapper,
  wonStyle,
} from './AddAmountBox.style';
interface AddAmountBoxProps {
  value: number;
  handleAmountChange: (value: number) => void;
}

const AddAmountBox = ({ value, handleAmountChange }: AddAmountBoxProps) => {
  const amountList = [
    {
      label: '+ 1만',
      amount: 10000,
    },
    {
      label: '+ 3만',
      amount: 30000,
    },
    {
      label: '+ 5만',
      amount: 50000,
    },
  ];

  const handleAddButtonClick = (amount: number) => {
    handleAmountChange(value + amount);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    handleAmountChange(Number(value));
  };

  return (
    <div css={addAmountBoxContainer}>
      <div css={amountBoxWrapper}>
        <Input
          value={value === 0 ? '' : value.toLocaleString()}
          onChange={handleInputChange}
          placeholder="최소 10,000원 이상"
          isValid={true}
          isCountValue={false}
        />
        <div css={wonStyle}>원</div>
      </div>
      <section css={addBoxWrapper}>
        {amountList.map((item, index) => (
          <button
            key={index}
            type="button"
            css={addButtonStyle}
            onClick={() => handleAddButtonClick(item.amount)}>
            {item.label}
          </button>
        ))}
      </section>
    </div>
  );
};

export default AddAmountBox;
