import { ProgressBar } from '@components';
import LogoHeader from 'src/components/common/headers/LogoHeader/LogoHeader';
import { devContainer } from './Dev.style';
import { Input } from '@components';
import { useState } from 'react';

const Dev = () => {
  const [value1, setValue1] = useState('');
  const [isError1, setIsError1] = useState(false);

  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes('채연')) {
      setIsError1(true);
    } else {
      setIsError1(false);
    }

    setValue1(e.target.value);
  };

  const [value2, setValue2] = useState('');
  const [isError2, setIsError2] = useState(false);

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes('채연')) {
      setIsError2(true);
    } else {
      setIsError2(false);
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
          setValue={setValue1}
          onChange={handleInputChange1}
          placeholder="내용을 입력하세요."
          errorMessage="* 채연이 넣지 마셈."
          isError={isError1}
          setIsError={setIsError1}
          inputLabel="글자 수 세는 거 없는 인풋"
          countValue={false}
        />

        <Input
          value={value2}
          setValue={setValue2}
          onChange={handleInputChange2}
          placeholder="내용을 입력하세요."
          errorMessage="* 채연이 넣지 마셈."
          isError={isError2}
          setIsError={setIsError2}
          inputLabel="글자 수 세는 거 있는 인풋"
          countValue={true}
        />
      </section>
    </>
  );
};

export default Dev;
