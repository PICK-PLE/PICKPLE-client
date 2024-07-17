import { LogoHeader } from '@components';
import HostApply from '@pages/host/components/HostApply/HostApply';
import { Provider } from 'jotai';
import { useFunnel } from 'src/hooks/useFunnel';
import { hostApplyPageLayout } from './HostApplyPage.style';
import { useParams } from 'react-router-dom';

const steps = ['step1', 'step2', 'finish'];

const HostApplyPage = () => {
  const { step } = useParams<{ step: string }>();
  const { Funnel, Step, nextStep } = useFunnel(step || steps[0], 'host/apply');
  return (
    <Provider>
      <LogoHeader />
      <div css={hostApplyPageLayout}>
        <HostApply steps={steps} nextClickHandler={nextStep} Funnel={Funnel} Step={Step} />
      </div>
    </Provider>
  );
};

export default HostApplyPage;
