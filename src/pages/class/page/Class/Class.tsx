import { useState } from 'react';
import { NoticeCardData } from 'src/constants/mocks/NoticeCardData';
import { AddAmountBox, NoticeCard } from '@pages/class/components';

const Class = () => {
  const [amountValue, setAmountValue] = useState(0);
  const handleAmountChange = (value: number) => {
    setAmountValue(value);
  };

  return (
    <div>
      {NoticeCardData.map((data) => (
        <NoticeCard key={data.noticeId} noticeData={data} />
      ))}
      <AddAmountBox value={amountValue} handleAmountChange={handleAmountChange} />
    </div>
  );
};

export default Class;
