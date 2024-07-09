import { Image } from '@components';
import { IcCopyPlus } from '@svg';

const Dev = () => {
  return (
    <div css={{ display: 'flex', gap: '2rem' }}>
      <Image variant="square" width="200px" height="200px" label={<IcCopyPlus />}></Image>
      <Image variant="square" width="200px" height="200px"></Image>
    </div>
  );
};

export default Dev;
