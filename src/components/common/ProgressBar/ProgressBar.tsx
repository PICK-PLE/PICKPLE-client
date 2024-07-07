import { progressBarContainer, progressBarStyle } from './ProgressBar.style';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div css={progressBarContainer}>
      <div css={progressBarStyle(progress)} />
    </div>
  );
};

export default ProgressBar;
