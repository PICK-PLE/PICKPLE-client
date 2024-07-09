import { DateSelect } from '@components';
import { useState } from 'react';

const Dev = () => {
  const [selected, setSelected] = useState<Date | null>(null);
  return (
    <>
      <DateSelect selected={selected} onChange={setSelected} />
    </>
  );
};

export default Dev;
