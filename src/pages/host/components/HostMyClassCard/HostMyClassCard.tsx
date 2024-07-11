import { Button, Image, Label } from '@components';

const HostMyClassCard = () => {
  return (
    <section>
      <div>
        <Image src={'https://placehold.co/300'} width="8.2rem" />
        <div>
          <h3>타이틀</h3>
          <Label variant="textCount">{`승인현황 1 / 15`}</Label>
        </div>
      </div>
      <Button variant="stroke">신청자 관리</Button>
    </section>
  );
};

export default HostMyClassCard;
