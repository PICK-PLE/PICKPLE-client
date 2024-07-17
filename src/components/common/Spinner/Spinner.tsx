import { PulseLoader } from 'react-spinners';

const override = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  height: 'calc(100dvh - 6rem)',
};

export const Spinner = () => {
  return (
    <>
      <PulseLoader
        size={10}
        margin={6}
        color="#5451FF"
        loading={true}
        speedMultiplier={0.7}
        cssOverride={override}
      />
    </>
  );
};
