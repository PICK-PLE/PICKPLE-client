import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { imageStyle, swiperStyle } from './Carousel.style';

interface CarouselProps {
  imageList: string[];
}

const Carousel = ({ imageList }: CarouselProps) => {
  return (
    <div>
      <Swiper css={swiperStyle} pagination={true} modules={[Pagination]} loop={true}>
        {imageList.map((image, index) => {
          return (
            // TODO: 추후 이미지 id를 key로 사용하도록 수정
            <SwiperSlide key={index}>
              <img css={imageStyle} src={image} alt={`Carousel ${index}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
