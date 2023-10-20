'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef } from 'react';

import Youtube from 'react-youtube';

export default function Test() {
  const ifreamRef = useRef(null);
  const videoLinkList = [
    { name: 'box', link: '' },
    { name: 'box', link: '' },
    { name: 'box', link: '' },
    { name: 'box', link: '' },
    { name: 'box', link: '' },
    { name: 'box', link: '' },
    { name: 'box', link: '' },
    { name: 'box', link: '' },
  ];
  const options = {
    width: 'inherit',
    heigh: 'auto',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  useEffect(() => {
    console.log('iframeRef', ifreamRef);
  }, []);
  return (
    <Swiper
      className="bg-orange-400 swiperCon w-[500px] h-[500px]"
      centeredSlides
      noSwiping
      freeMode
      direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      onTouchStart={() => {
        console.log('touchStart', window.parent);
      }}
      onClick={(e: any) => {
        console.log('click', e);
      }}
      mousewheel
      modules={[Pagination, Mousewheel]}>
      {videoLinkList.map((item, index) => {
        if (index === 0)
          return (
            <SwiperSlide key={`${index}`} className="!h-full bg-gray-900">
              {/* {item.name} + `${index + 1}` */}
              <Youtube
                style={{
                  // pointerEvents: 'none',
                  overflow: 'hidden',
                  width: 'inherit',
                  height: 'auto',
                }}
                ref={ifreamRef}
                videoId="TipuWIrP934"
                opts={options}
                // onReady={this._onReady}
              />
            </SwiperSlide>
          );
        return (
          <SwiperSlide
            key={`${index}`}
            className="!h-full text-2xl font-bold !flex items-center justify-center border-solid border-[1px]">
            {item.name} {index + 1}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
