import { LogoHeader } from '@components';
import ClassPost from '@pages/class/components/ClassPost/ClassPost';
import { useFunnel } from 'src/hooks/useFunnel';
import { classPostPageLayout } from './ClassPostPage.style';

const steps = ['step1', 'step2', 'step3', 'step4'];

const ClassPostPage = () => {
  const { Funnel, Step, setStep } = useFunnel(steps[0]);
  const nextClickHandler = (nextStep: string) => {
    setStep(nextStep);
  };
  return (
    <>
      <LogoHeader />
      <div css={classPostPageLayout}>
        <ClassPost steps={steps} nextClickHandler={nextClickHandler} Funnel={Funnel} Step={Step} />
      </div>
    </>
  );
};

export default ClassPostPage;
