import { Image, Label, SimpleUserProfile } from '@components';
import {
  classListContainer,
  classListTextContainer,
  classListTextWrapper,
  titleTextWrapper,
  timeTextWraaper,
} from '@pages/categories/components/ClassListCard/ClassListCard.style';
import { components } from '@schema';

type MoimByCategoryResponse = components['schemas']['MoimByCategoryResponse'];

interface ClassListCardProps {
  classListData: MoimByCategoryResponse;
}

const ClassListCard = ({ classListData }: ClassListCardProps) => {
  const { dayOfDay, moimImageUrl, title, hostImageUrl, hostNickName, dateList } = classListData;
  const { date, dayOfWeek, startTime, endTime } = dateList ?? {};

  return (
    <div css={classListContainer}>
      <Image
        src={moimImageUrl || ''}
        width="9rem"
        label={<Label variant="status">D-{dayOfDay}</Label>}
      />

      <div css={classListTextContainer}>
        <div css={classListTextWrapper}>
          <span css={titleTextWrapper}>{title}</span>
          <SimpleUserProfile size="small" userImgUrl={hostImageUrl} username={hostNickName ?? ''} />
        </div>

        <span css={timeTextWraaper}>{`${date}. (${dayOfWeek}) ${startTime}~${endTime}`}</span>
      </div>
    </div>
  );
};

export default ClassListCard;
