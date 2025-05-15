// NODE MODULES...

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

// ASSETS...
import {
  webDev1,
  webDev2,
  webDev3,
  webDev4,
  webDev5,
  webDev6,
} from '../assets/assets';

export default function VideoCard() {
  return (
    <>
      <div className='absolute w-full h-full opacity-80 rounded-xl'>
        <Swiper
          className='w-full h-full rounded-xl'
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          allowTouchMove={false}
          speed={1000}
        >
          <SwiperSlide className='w-full h-full rounded-xl'>
            <img
              src={webDev1}
              className='img-cover rounded-xl'
            />
          </SwiperSlide>

          <SwiperSlide className='w-full h-full rounded-xl'>
            <img
              src={webDev2}
              className='img-cover rounded-xl'
            />
          </SwiperSlide>

          <SwiperSlide className='w-full h-full rounded-xl'>
            <img
              src={webDev3}
              className='img-cover rounded-xl'
            />
          </SwiperSlide>

          <SwiperSlide className='w-full h-full rounded-xl'>
            <img
              src={webDev4}
              className='img-cover rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full h-full rounded-xl'>
            <img
              src={webDev5}
              className='img-cover rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full h-full rounded-xl'>
            <img
              src={webDev6}
              className='img-cover rounded-xl'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
