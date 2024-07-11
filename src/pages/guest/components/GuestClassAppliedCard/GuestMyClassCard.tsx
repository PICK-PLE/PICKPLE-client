import { GUEST_MY_CLASS_DATA } from 'src/constants/mocks/guestMyClassCardData';
import MoimCard from '../MoimCard/MoimCard';
import { guestClassAppliedCardContainer } from './GuestMyClassCard.style';

const GuestMyClassCard = () => {
  return (
    <section css={guestClassAppliedCardContainer}>
      {GUEST_MY_CLASS_DATA.data.map((data) => (
        <MoimCard key={data.moimId} data={data} />
      ))}
    </section>
  );
};

export default GuestMyClassCard;
