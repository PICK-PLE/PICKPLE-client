import React from 'react';
import Image from 'src/components/common/Image/Image';
import SimpleUserProfile from 'src/components/common/SimpleUserProfile/SimpleUserProfile';

interface GuestClassRegisterCardProps {
  title: string;
}

const GuestClassRegisterCard = ({ title }: GuestClassRegisterCardProps) => {
  return (
    <article>
      <section>
        <Image variant="square" width="84px" height="84px" />
        <div>
          <h4>{title}</h4>
          <SimpleUserProfile username="달아올랐구마" />
        </div>
      </section>
      <section></section>
      <span></span>
      <section></section>
    </article>
  );
};

export default GuestClassRegisterCard;
