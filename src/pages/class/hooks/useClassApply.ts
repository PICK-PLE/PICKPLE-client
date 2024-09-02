import { useState } from 'react';

import ClassApplyComplete from '@pages/class/page/ClassApply/ClassApplyComplete/ClassApplyComplete';
import ClassApplyDeposit from '@pages/class/page/ClassApply/ClassApplyDeposit/ClassApplyDeposit';
import ClassApplyQuestion from '../page/ClassApply/ClassApplyQuestion/ClassApplyQuestion';
import ClassApplyRule from '@pages/class/page/ClassApply/ClassApplyRule/ClassApplyRule';

type StepType = 'rule' | 'question' | 'deposit' | 'complete';
const STEPS: StepType[] = ['rule', 'question', 'deposit', 'complete'];

const STEP_COMPONENTS = {
  [STEPS[0]]: ClassApplyRule,
  [STEPS[1]]: ClassApplyQuestion,
  [STEPS[2]]: ClassApplyDeposit,
  [STEPS[3]]: ClassApplyComplete,
};

const PROGRESS = {
  [STEPS[0]]: 25,
  [STEPS[1]]: 50,
  [STEPS[2]]: 75,
  [STEPS[3]]: 100,
};

const useClassApply = () => {
  const [step, setStep] = useState<StepType>(STEPS[0]);
  const CurrentComponent = STEP_COMPONENTS[step];

  const onNext = () => {
    const currentIndex = STEPS.indexOf(step);
    const nextIndex = currentIndex + 1;
    if (nextIndex < STEPS.length) {
      setStep(STEPS[nextIndex]);
    }
  };
  return { progress: PROGRESS[step], CurrentComponent, onNext };
};

export default useClassApply;
