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
import { hostMyClassDataResponseType } from '@types';

interface HostMyClassCardProps {
  hostMyClassData: hostMyClassDataResponseType;
}

const HostMyClassCard = ({ hostMyClassData }: HostMyClassCardProps) => {
  const { moimImage, title, approvedGuest, maxGuest } = hostMyClassData;
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
      <Button variant="stroke">신청자 관리</Button>
    </article>
  );
};

export default HostMyClassCard;
