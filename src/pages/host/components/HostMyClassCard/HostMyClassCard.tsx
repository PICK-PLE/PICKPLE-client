import { Button, Image, Label } from '@components';
import { IcDropdownRight } from '@svg';
import {
  cardButton,
  cardContainer,
  cardContent,
  cardIcon,
  cardText,
  cardTitle,
  cardTitleWrapper,
} from './HostMyClassCard.style';

interface hostMyClassDataResponseType {
  moimImage: string;
  title: string;
  approvedGuest: number;
  maxGuest: number;
}

interface HostMyClassCardProps {
  hostMyClassData: hostMyClassDataResponseType;
}

const HostMyClassCard = ({ hostMyClassData }: HostMyClassCardProps) => {
  const { moimImage, title, approvedGuest, maxGuest } = hostMyClassData;
  return (
    <section css={cardContainer}>
      <div css={cardContent}>
        <Image src={moimImage} width="8.2rem" />
        <div css={cardText}>
          <div css={cardTitleWrapper} onClick={() => {}}>
            <h3 css={cardTitle}>{title} </h3>
            <IcDropdownRight css={cardIcon} />
          </div>
          <Label variant="textCount">{`승인 현황 ${approvedGuest} / ${maxGuest}`}</Label>
        </div>
      </div>
      <Button css={cardButton} variant="stroke">
        신청자 관리
      </Button>
    </section>
  );
};

export default HostMyClassCard;
