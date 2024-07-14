import { LogoHeader } from '@components';
import HostApply from '@pages/host/components/HostApply/HostApply';
import { useFunnel } from 'src/hooks/useFunnel';
import { hostApplyPageLayout } from './HostApplyPage.style';

const steps = ['step1', 'step2', 'step3'];

const HostApplyPage = () => {
  const { Funnel, Step, setStep } = useFunnel(steps[0]);
  const nextClickHandler = (nextStep: string) => {
    setStep(nextStep);
  };
  return (
    <>
      <LogoHeader />
      <div css={hostApplyPageLayout}>
        <HostApply steps={steps} nextClickHandler={nextClickHandler} Funnel={Funnel} Step={Step} />
      </div>
    </>
  );
};

export default HostApplyPage;
