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
  const [applyContent, setApplyContent] = useState<ReactElement | null>(null);
  const [nextStep, setNextStep] = useState('');

  useEffect(() => {
    const handleChangePage = () => {
      setApplyStep(nextStep);
    };

    switch (applyStep) {
      case 'rule':
        setProgress(25);
        setApplyContent(<ClassApplyRule handleChangePage={handleChangePage} />);
        setNextStep('question');
        break;
      case 'question':
        setProgress(50);
        setApplyContent(<ClassApplyQuestion handleChangePage={handleChangePage} />);
        setNextStep('deposit');
        break;
      case 'deposit':
        setProgress(75);
        setApplyContent(<ClassApplyDeposit handleChangePage={handleChangePage} />);
        setNextStep('complete');
        break;
      case 'complete':
        setProgress(100);
        setApplyContent(<ClassApplyComplete />);
    }
  }, [applyStep, nextStep]);

  return (
    <>
      <LogoHeader />
      <div css={classApplyContainer}>
        <ProgressBar progress={progress} />
        {applyContent}
      </div>
    </>
  );
};

export default ClassApply;
