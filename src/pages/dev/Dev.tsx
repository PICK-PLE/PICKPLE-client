import { ProgressBar, QuestionInput } from '@components';
import LogoHeader from 'src/components/common/headers/LogoHeader/LogoHeader';
import { devContainer } from './Dev.style';
import { useState } from 'react';

const Dev = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <LogoHeader />
      <ProgressBar progress={77} />
      <section css={devContainer}>
        {/* 여기에 컴포넌트 추가해보고, 디바이스 크기 조정해보면서 테스트 */}
        <QuestionInput
          numberLabel="Q1"
          placeholder="(필수) 질문을 입력하세요."
          value={value}
          maxLength={20}
          onChange={handleInputChange}
        />
      </section>
    </>
  );
};

export default Dev;
