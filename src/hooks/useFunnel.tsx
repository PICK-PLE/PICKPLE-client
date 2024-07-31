import { ReactElement, ReactNode, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

export interface StepProps {
  name: string;
  children: ReactNode;
}
export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export const useFunnel = (defaultStep: string, basePath: string) => {
  const [step, setStep] = useState(defaultStep);
  const navigate = useNavigate();
  const { step: urlStep } = useParams<{ step: string }>();

  useEffect(() => {
    if (urlStep) {
      setStep(urlStep);
    }
  }, [urlStep]);

  const Step = (props: StepProps): ReactElement => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find((childStep) => childStep.props.name === step);

    return <>{targetStep}</>;
  };

  const nextStep = (next: string) => {
    setStep(next);
    navigate(`/${basePath}/${next}`);
  };

  return { Funnel, Step, setStep, nextStep, currrendStep: step } as const;
};
