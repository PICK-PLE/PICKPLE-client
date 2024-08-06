import React from 'react';

import { FunnelProps, StepProps } from 'src/hooks/useFunnel';

import StepFour from '../StepFour/StepFour';
import StepOne from '../StepOne/StepOne';
import StepThree from '../StepThree/StepThree';
import StepTwo from '../StepTwo/StepTwo';

export interface ClassPostProps {
  steps: string[];
  nextClickHandler: (nextStep: string) => void;
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
}

const ClassPost = ({ steps, nextClickHandler, Funnel, Step }: ClassPostProps) => {
  return (
    <Funnel>
      <Step name={steps[0]}>
        <StepOne onNext={() => nextClickHandler(steps[1])} />
      </Step>
      <Step name={steps[1]}>
        <StepTwo onNext={() => nextClickHandler(steps[2])} />
      </Step>
      <Step name={steps[2]}>
        <StepThree onNext={() => nextClickHandler(steps[3])} />
      </Step>
      <Step name={steps[3]}>
        <StepFour />
      </Step>
    </Funnel>
  );
};

export default ClassPost;
