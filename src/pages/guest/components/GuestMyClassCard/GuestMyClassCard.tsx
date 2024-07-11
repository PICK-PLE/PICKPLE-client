import { GUEST_MY_CLASS_DATA } from 'src/constants/mocks/guestMyClassCardData';
import MoimCard from '../MoimCard/MoimCard';
import { guestClassAppliedCardContainer } from './GuestMyClassCard.style';

const GuestMyClassCard = () => {
  return (
    <section css={guestClassAppliedCardContainer}>
      {GUEST_MY_CLASS_DATA.map((data) => (
        <MoimCard key={data.moimId} guestMyClassData={data} />
      ))}
    </section>
  );
};

export default GuestMyClassCard;
