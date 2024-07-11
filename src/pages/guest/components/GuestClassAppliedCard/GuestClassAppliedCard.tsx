import { guestClassAppliedCardContainer } from './GuestClassAppliedCard.style';
import MoimCard from '../MoimCard/MoimCard';
import { Moim } from '../../../../types/responseType';

const MOCK_DATA: { data: Moim[] } = {
  data: [
    {
      moimId: 1,
      moimSubmissionState: 'PENDING_PAYMENT',
      moimTitle: '부산10년 토박이 달아오르구마와 함께하는 사투리 모임',
      dateList: {
        date: '2024.07.15',
        dayOfWeek: '월',
        startTime: '10:00',
        endTime: '12:00',
      },
      fee: 10000,
      hostNickname: '달아올랐구마',
    },
    {
      moimId: 1,
      moimSubmissionState: 'REJECTED',
      moimTitle: '부산10년 토박이 달아오르구마와 함께하는 사투리 모임',
      dateList: {
        date: '2024.07.15',
        dayOfWeek: '월',
        startTime: '10:00',
        endTime: '12:00',
      },
      fee: 10000,
      hostNickname: '달아올랐구마',
    },
  ],
};

const GuestClassAppliedCard = () => {
  return (
    <section css={guestClassAppliedCardContainer}>
      {MOCK_DATA.data.map((data) => (
        <MoimCard key={data.moimId} data={data} />
      ))}
    </section>
  );
};

export default GuestClassAppliedCard;
