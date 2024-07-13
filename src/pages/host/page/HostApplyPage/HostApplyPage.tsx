import { LogoHeader } from '@components';
import HostApply from '@pages/host/components/HostApply/HostApply';
import { useFunnel } from 'src/hooks/useFunnel';

const steps = ['step1', 'step2', 'step3'];

const HostApplyPage = () => {
  const { Funnel, Step, setStep } = useFunnel(steps[0]);
  const nextClickHandler = (nextStep) => {
    setStep(nextStep);
  };
  return (
    <>
      <LogoHeader />
      <HostApply steps={steps} nextClickHandler={nextClickHandler} Funnel={Funnel} Step={Step} />
    </>
  );
};

export default HostApplyPage;
