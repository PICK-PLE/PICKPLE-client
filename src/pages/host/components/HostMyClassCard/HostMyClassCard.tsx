import { Button, Image, Label } from '@components';
import { IcDropdownRight } from '@svg';
import {
  cardContainer,
  cardContent,
  cardIcon,
  cardText,
  cardTitle,
  cardTitleWrapper,
} from './HostMyClassCard.style';
import { HostMyClassDataResponseType } from '@types';
import { useNavigate } from 'react-router-dom';

interface HostMyClassCardProps {
  hostMyClassData: HostMyClassDataResponseType;
}

const HostMyClassCard = ({ hostMyClassData }: HostMyClassCardProps) => {
  const { moimImage, title, approvedGuest, maxGuest, moimId } = hostMyClassData;
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/host/myclass/manage/${moimId}`);
  };

  return (
    <article css={cardContainer}>
      <section css={cardContent}>
        <Image src={moimImage} width="8.2rem" />
        <div css={cardText}>
          <div css={cardTitleWrapper} onClick={() => {}}>
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
