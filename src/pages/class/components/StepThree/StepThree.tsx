import { StepProps } from 'src/types/nextStep';

const StepThree = ({ onNext }: StepProps) => {
  const handleNextClick = () => {
    onNext();
  };
  return <div onClick={handleNextClick}>StepThree</div>;
};

export default StepThree;
