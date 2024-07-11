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

import { data } from './data';

const HostMyClassCard = () => {
  return (
    <section css={cardContainer}>
      <div css={cardContent}>
        <Image src={data.moimImage} width="8.2rem" />
        <div css={cardText}>
          <div css={cardTitleWrapper}>
            <h3 css={cardTitle}>{data.title} </h3>
            <IcDropdownRight css={cardIcon} />
          </div>
          <Label variant="textCount">{`승인 현황 ${data.approvedGuest} / ${data.maxGuest}`}</Label>
        </div>
      </div>
      <Button css={cardButton} variant="stroke">
        신청자 관리
      </Button>
    </section>
  );
};

export default HostMyClassCard;
