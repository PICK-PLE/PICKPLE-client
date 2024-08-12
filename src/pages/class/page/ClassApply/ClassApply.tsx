import { ReactElement, useEffect, useState } from 'react';

import { LogoHeader, ProgressBar } from '@components';
import { classApplyContainer } from '@pages/class/page/ClassApply/ClassApply.style';
import ClassApplyComplete from '@pages/class/page/ClassApply/ClassApplyComplete/ClassApplyComplete';
import ClassApplyDeposit from '@pages/class/page/ClassApply/ClassApplyDeposit/ClassApplyDeposit';
import ClassApplyQuestion from '@pages/class/page/ClassApply/ClassApplyQuestion/ClassApplyQuestion';
import ClassApplyRule from '@pages/class/page/ClassApply/ClassApplyRule/ClassApplyRule';

const ClassApply = () => {
  const [applyStep, setApplyStep] = useState('rule');
  const [progress, setProgress] = useState(0);
  const [renderPage, setRenderPage] = useState<ReactElement | null>(null);

  const handleChangePage = (step: string) => {
    setApplyStep(step);
  };

  useEffect(() => {
    switch (applyStep) {
      case 'rule':
        setProgress(25);
        setRenderPage(<ClassApplyRule handleChangePage={handleChangePage} />);
        break;
      case 'question':
        setProgress(50);
        setRenderPage(<ClassApplyQuestion handleChangePage={handleChangePage} />);
        break;
      case 'deposit':
        setProgress(75);
        setRenderPage(<ClassApplyDeposit handleChangePage={handleChangePage} />);
        break;
      case 'complete':
        setProgress(100);
        setRenderPage(<ClassApplyComplete />);
    }
  }, [applyStep]);

  return (
    <>
      <LogoHeader />
      <div css={classApplyContainer}>
        <ProgressBar progress={progress} />
        {renderPage}
      </div>
    </>
  );
};

export default ClassApply;
