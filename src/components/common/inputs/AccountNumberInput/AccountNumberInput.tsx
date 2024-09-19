import React from 'react';

import Input from '../Input/Input';

interface AccountNumberInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AccountNumberInput = ({ value, onChange }: AccountNumberInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        value: numericValue,
      },
    };
    onChange(syntheticEvent as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <Input
      type="text"
      value={value}
      onChange={handleInputChange}
      inputLabel="계좌 번호"
      placeholder="'-' 없이 입력해 주세요."
      isValid={true}
      isCountValue={false}
    />
  );
};

export default AccountNumberInput;
