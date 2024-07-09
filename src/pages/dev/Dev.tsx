import { CountPeople } from '@components';
import { useState } from 'react';

const Dev = () => {
  const [people, setPeople] = useState(7);
  const handlePeopleChange = (newCount: number) => {
    setPeople(newCount);
  };
  return (
    <>
      <CountPeople people={people} onPeopleChange={handlePeopleChange} />
    </>
  );
};

export default Dev;
