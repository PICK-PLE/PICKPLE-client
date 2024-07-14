import { LogoHeader } from '@components';
import ClassPost from '@pages/class/components/ClassPost/ClassPost';
import { useFunnel } from 'src/hooks/useFunnel';

const steps = ['step1', 'step2', 'step3', 'step4'];

const ClassPostPage = () => {
  const { Funnel, Step, setStep } = useFunnel(steps[0]);
  const nextClickHandler = (nextStep: string) => {
    setStep(nextStep);
  };
  return (
    <>
      <LogoHeader />
      <ClassPost steps={steps} nextClickHandler={nextClickHandler} Funnel={Funnel} Step={Step} />
    </>
  );
};

export default ClassPostPage;
