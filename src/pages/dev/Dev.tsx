import { Button } from '@components';
import { useState } from 'react';

const Dev = () => {
  const [isButtonAbled] = useState(false);
  return (
    <>
      <Button size={'xLarge'} disabled={isButtonAbled}>
        버튼
      </Button>
      <Button size={'xLarge'} disabled={true}>
        버튼
      </Button>
    </>
  );
};

export default Dev;
