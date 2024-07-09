import { ProgressBar } from '@components';
import LogoHeader from 'src/components/common/headers/LogoHeader/LogoHeader';
import { devContainer } from './Dev.style';
import { Input } from '@components';
import { useState } from 'react';

const Dev = () => {
  const [value1, setValue1] = useState('');
  const [isError1, setIsError1] = useState(true);

  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes('채연')) {
      setIsError1(false);
    } else {
      setIsError1(true);
    }

    setValue1(e.target.value);
  };

  const [value2, setValue2] = useState('');
  const [isError2, setIsError2] = useState(true);

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes('채연')) {
      setIsError2(false);
    } else {
      setIsError2(true);
    }

    setValue2(e.target.value);
  };

  return (
    <>
      <LogoHeader />
      <ProgressBar progress={77} />
      <section css={devContainer}>
        {/* 여기에 컴포넌트 추가해보고, 디바이스 크기 조정해보면서 테스트 */}
        <Input
          value={value1}
          onChange={handleInputChange1}
          placeholder="내용을 입력하세요."
          errorMessage="* 채연이 넣지 마셈."
          isValid={isError1}
          inputLabel="글자 수 세는 거 없는 인풋"
          isCountValue={false}
        />

        <Input
          value={value2}
          onChange={handleInputChange2}
          placeholder="내용을 입력하세요."
          errorMessage="* 채연이 넣지 마셈."
          isValid={isError2}
          inputLabel="글자 수 세는 거 있는 인풋"
          isCountValue={true}
        />
      </section>
    </>
  );
};

export default Dev;
