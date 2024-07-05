import { SelectButton } from '@components';
import { useState } from 'react';

const Dev = () => {
  const [selected, setSelected] = useState<'오프라인' | '온라인'>('오프라인');

  const handleClickSelectButton = (e: React.MouseEvent<HTMLDivElement>) => {
    const selectedText = e.currentTarget.textContent;
    if (selectedText === '오프라인' || selectedText === '온라인') {
      setSelected(selectedText);
    }
  };

  return (
    <div>
      <SelectButton
        left="오프라인"
        right="온라인"
        selected={selected}
        onClick={handleClickSelectButton}
      />
    </div>
  );
};

export default Dev;
