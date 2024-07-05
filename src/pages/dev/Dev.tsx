import { IconButton } from '@components';
import { IcCopyPlus } from '@svg';

const Dev = () => {
  return (
    <div>
      <IconButton icon={<IcCopyPlus />} onClick={() => console.log('clicked')}>
        작성하기
      </IconButton>
    </div>
  );
};

export default Dev;
