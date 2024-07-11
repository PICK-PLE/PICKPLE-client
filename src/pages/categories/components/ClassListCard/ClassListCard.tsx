import { Image, SimpleUserProfile } from '@components';
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
// 페이지에서 api 호출 후 데이터 보내주는 거 받기
const ClassListCard = ({ classListData }: ClassListCardProps) => {
  const { dayOfDay, moimImageUrl, moimTitle, hostImageUrl, hostNickName, dateList } = classListData;
  const { date, dayOfWeek, startTime, endTime } = dateList;

  console.log(moimImageUrl); //TODO: Image 컴포넌트 수정 반영되면 그 이후에 지울 것

  return (
    <div css={classListContainer}>
      <Image src={moimImageUrl} width="9rem" label={`D-${dayOfDay}`}/>
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
