import React from 'react';
import { Button, ProgressBar } from '@components';
import { headerStyle, layoutStyle, subTitleStyle, titleStyle } from './StepThree.style';

const StepThree = () => {
  return (
    <>
      <ProgressBar progress={100} />
      <div css={layoutStyle}>
        <header css={headerStyle}>
          <h4 css={titleStyle}>호스트 신청</h4>
          <h1 css={subTitleStyle}>호스트님에 대해 알려주세요!</h1>
        </header>
        <main></main>
        <footer>
          <Button variant="large" onClick={() => {}}>
            다른 모임 둘러보기
          </Button>
        </footer>
      </div>
    </>
  );
};

export default StepThree;
