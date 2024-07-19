import { Button, Image, Label } from '@components';
import { IcDropdownRight } from '@svg';
import {
  cardContainer,
  cardContent,
  cardIcon,
  cardText,
  cardTitle,
  cardTitleWrapper,
  imageStyle,
} from './HostMyClassCard.style';
import { useNavigate } from 'react-router-dom';
import { components } from '@schema';

type MoimListByHostGetResponse = components['schemas']['MoimListByHostGetResponse'];

interface HostMyClassCardProps {
  hostMyClassData: MoimListByHostGetResponse;
}
const HostMyClassCard = ({ hostMyClassData }: HostMyClassCardProps) => {
  const { moimImage, title, approvedGuest, maxGuest, moimId } = hostMyClassData;

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/class/${moimId}`);
  };

  const handleButtonClick = () => {
    navigate(`/host/myclass/manage/${moimId}`);
  };
  return (
    <article css={cardContainer}>
      <section css={cardContent}>
        <Image src={moimImage ?? ''} width="8.2rem" customStyle={imageStyle} />
        <div css={cardText}>
          <div css={cardTitleWrapper} onClick={handleCardClick}>
            <h3 css={cardTitle}>{title} </h3>
            <IcDropdownRight css={cardIcon} />
          </div>
          <Label variant="textCount">{`승인 현황 ${approvedGuest} / ${maxGuest}`}</Label>
        </div>
      </section>
      <Button variant="stroke" onClick={handleButtonClick}>
        신청자 관리
      </Button>
    </article>
  );
};

export default HostMyClassCard;
