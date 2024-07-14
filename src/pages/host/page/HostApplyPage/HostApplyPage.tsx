import { LogoHeader } from '@components';
import HostApply from '@pages/host/components/HostApply/HostApply';
import { Provider } from 'jotai';
import { useFunnel } from 'src/hooks/useFunnel';
import { hostApplyPageLayout } from './HostApplyPage.style';
import { useNavigate, useParams } from 'react-router-dom';

const steps = ['step1', 'step2', 'finish'];

const HostApplyPage = () => {
  const { step } = useParams<{ step: string }>();
  const navigate = useNavigate();
  const { Funnel, Step, setStep } = useFunnel(step || steps[0]);
  const nextClickHandler = (nextStep: string) => {
    setStep(nextStep);
    navigate(`/host/apply/${nextStep}`);
  };
  return (
    <Provider>
      <LogoHeader />
      <div css={hostApplyPageLayout}>
        <HostApply steps={steps} nextClickHandler={nextClickHandler} Funnel={Funnel} Step={Step} />
      </div>
    </Provider>
  );
};

export default HostApplyPage;
