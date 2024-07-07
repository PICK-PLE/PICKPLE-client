import { DateSelect } from '@components';
import { useState } from 'react';

const Dev = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <>
      <br />
      <DateSelect selected={selectedDate} onChange={handleDateChange} />
    </>
  );
};

export default Dev;
