import { ProgressBar } from '@components';
import LogoHeader from 'src/components/common/headers/LogoHeader/LogoHeader';
import { devContainer } from './Dev.style';
import { Input } from '@components';
import { useState } from 'react';

const Dev = () => {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes('채연')) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    setValue(e.target.value);
  };

  return (
    <>
      <LogoHeader />
      <ProgressBar progress={77} />
      <section css={devContainer}>
        {/* 여기에 컴포넌트 추가해보고, 디바이스 크기 조정해보면서 테스트 */}
        <Input
          value={value}
          setValue={setValue}
          onChange={handleInputChange2}
          placeholder="내용을 입력하세요."
          errorMessage="* 채연이 넣지 마셈."
          maxTextLength={15}
          isError={isError}
          setIsError={setIsError}
        />
      </section>
    </>
  );
};

export default Dev;
