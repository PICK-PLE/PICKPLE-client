import { ProgressBar, TextArea } from '@components';
import LogoHeader from 'src/components/common/headers/LogoHeader/LogoHeader';
import { devContainer } from './Dev.style';
import { useState } from 'react';

const Dev = () => {
  const [value, setValue] = useState('');

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <LogoHeader />
      <ProgressBar progress={77} />
      <section css={devContainer}>
        {/* 여기에 컴포넌트 추가해보고, 디바이스 크기 조정해보면서 테스트 */}
        <TextArea
          placeholder="소개글을 입력해주세요."
          maxLength={10}
          size="small"
          value={value}
          onChange={handleTextAreaChange}
        />
      </section>
    </>
  );
};

export default Dev;
