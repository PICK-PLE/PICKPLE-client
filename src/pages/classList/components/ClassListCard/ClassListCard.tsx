import { Image, Label, SimpleUserProfile } from '@components';
import {
  classListContainer,
  classListTextContainer,
  classListTextWrapper,
  titleTextWrapper,
  timeTextWraaper,
  classCardCustomStyle,
  classListCardBackground,
} from '@pages/classList/components/ClassListCard/ClassListCard.style';
import { dDayText } from '@utils';

import { components } from '@schema';

type MoimByCategoryResponse = components['schemas']['MoimByCategoryResponse'];

interface ClassListCardProps {
  classListData: MoimByCategoryResponse;
  variant: 'classList' | 'hostInfo';
}

const ClassListCard = ({ classListData, variant }: ClassListCardProps) => {
  const { dayOfDay, moimImageUrl, title, hostImageUrl, hostNickName, dateList } = classListData;
  const { date, dayOfWeek, startTime, endTime } = dateList ?? {};

  return (
    <div css={[classListContainer, classListCardBackground[variant]]}>
      <Image
        src={moimImageUrl || ''}
        width="9rem"
        label={
          dayOfDay !== undefined ? (
            <Label variant="status">
              {dDayText(dayOfDay) === '' ? '마감' : dDayText(dayOfDay)}
            </Label>
          ) : null
        }
        customStyle={classCardCustomStyle}
      />

      <div css={classListTextContainer}>
        <span css={titleTextWrapper}>{title}</span>
        <div css={classListTextWrapper}>
          <SimpleUserProfile size="small" userImgUrl={hostImageUrl} username={hostNickName ?? ''} />
          <span css={timeTextWraaper}>{`${date}. (${dayOfWeek}) ${startTime}~${endTime}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ClassListCard;
