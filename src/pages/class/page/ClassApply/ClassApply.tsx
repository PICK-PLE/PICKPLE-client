import { LogoHeader, ProgressBar } from '@components';
import useClassApply from '@pages/class/hooks/useClassApply';
import { classApplyContainer } from '@pages/class/page/ClassApply/ClassApply.style';

const ClassApply = () => {
  const { progress, CurrentComponent, onNext } = useClassApply();

  return (
    <>
      <LogoHeader />
      <div css={classApplyContainer}>
        <ProgressBar progress={progress} />
        <CurrentComponent handlePageChange={onNext} />
      </div>
    </>
  );
};

export default ClassApply;
