import { AddAmountBox } from '@pages/class/components';
import { useState } from 'react';

const Class = () => {
  const [amountValue, setAmountValue] = useState(0);
  const handleAmountChange = (value: number) => {
    setAmountValue(value);
  };

  return (
    <div>
      <AddAmountBox value={amountValue} handleAmountChange={handleAmountChange} />
    </div>
  );
};

export default Class;
