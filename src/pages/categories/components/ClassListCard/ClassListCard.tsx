import { Image, Label, SimpleUserProfile } from '@components';
import {
  classListContainer,
  classListTextContainer,
  classListTextWrapper,
  titleTextWrapper,
  timeTextWraaper,
} from '@pages/categories/components/ClassListCard/ClassListCard.style';

interface DateListProps {
  date: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

interface ClassListDataProps {
  dayOfDay: number;
  moimImageUrl: string;
  moimTitle: string;
  hostImageUrl: string;
  hostNickName: string;
  dateList: DateListProps;
}

interface ClassListCardProps {
  classListData: ClassListDataProps;
}

const ClassListCard = ({ classListData }: ClassListCardProps) => {
  const { dayOfDay, moimImageUrl, moimTitle, hostImageUrl, hostNickName, dateList } = classListData;
  const { date, dayOfWeek, startTime, endTime } = dateList;

  return (
    <div css={classListContainer}>
      <Image src={moimImageUrl} width="9rem" label={<Label variant="status">D-{dayOfDay}</Label>} />

      <div css={classListTextContainer}>
        <div css={classListTextWrapper}>
          <span css={titleTextWrapper}>{moimTitle}</span>
          <SimpleUserProfile size="small" userImgUrl={hostImageUrl} username={hostNickName} />
        </div>

        <span css={timeTextWraaper}>
          {date} ({dayOfWeek}) {startTime}~{endTime}
        </span>
      </div>
    </div>
  );
};

export default ClassListCard;
