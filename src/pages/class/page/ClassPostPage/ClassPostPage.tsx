import { useParams } from 'react-router-dom';

import ClassPost from '@pages/class/components/ClassPost/ClassPost';
import { Provider } from 'jotai';
import { useFunnel } from 'src/hooks/useFunnel';

import { LogoHeader } from '@components';

import { classPostPageLayout } from './ClassPostPage.style';

const steps = ['step1', 'step2', 'step3', 'finish'];

const ClassPostPage = () => {
  const { step } = useParams<{ step: string }>();
  const { Funnel, Step, nextStep } = useFunnel(step || steps[0], 'class/post');
  return (
    <Provider>
      <LogoHeader />
      <div css={classPostPageLayout}>
        <ClassPost steps={steps} nextClickHandler={nextStep} Funnel={Funnel} Step={Step} />
      </div>
    </Provider>
  );
};

export default ClassPostPage;
