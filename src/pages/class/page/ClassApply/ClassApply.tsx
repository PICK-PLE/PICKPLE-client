import { useState } from 'react';

import ClassApplyComplete from '@pages/class/page/ClassApply/ClassApplyComplete/ClassApplyComplete';
import ClassApplyDeposit from '@pages/class/page/ClassApply/ClassApplyDeposit/ClassApplyDeposit';
import ClassApplyQuestion from '@pages/class/page/ClassApply/ClassApplyQuestion/ClassApplyQuestion';
import ClassApplyRule from '@pages/class/page/ClassApply/ClassApplyRule/ClassApplyRule';

const ClassApply = () => {
  const [applyStep, setApplyStep] = useState('rule');

  const handleChangePage = (step: string) => {
    setApplyStep(step);
  };

  return (
    <>
      {applyStep === 'rule' && <ClassApplyRule handleChangePage={handleChangePage} />}
      {applyStep === 'question' && <ClassApplyQuestion handleChangePage={handleChangePage} />}
      {applyStep === 'deposit' && <ClassApplyDeposit handleChangePage={handleChangePage} />}
      {applyStep === 'complete' && <ClassApplyComplete />}
    </>
  );
};

export default ClassApply;
