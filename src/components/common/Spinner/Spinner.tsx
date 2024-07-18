import { PulseLoader } from 'react-spinners';

interface SpinnerProps {
  variant?: 'page' | 'component';
}

const defaultOverride = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  height: 'calc(100dvh - 6rem)',
};

const componentOverride = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
};

export const Spinner = ({ variant = 'page' }: SpinnerProps) => {
  return (
    <>
      <PulseLoader
        size={10}
        margin={6}
        color="#5451FF"
        loading={true}
        speedMultiplier={0.7}
        cssOverride={variant === 'page' ? defaultOverride : componentOverride}
      />
    </>
  );
};
