'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Lazy, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Youtube, { YouTubeProps } from 'react-youtube';
import { useEffect, useRef, useState } from 'react';

export default function Test() {
  const ifreamRef = useRef(null);
  const [isMount, setIsMount] = useState(false);
  const videoLinkList = [
    { name: 'box', link: 'dbeN4fRjmmk' },
    { name: 'box', link: 'FQ4NBPmdBQk' },
    { name: 'box', link: 'fmA55ZSyuI4' },
    { name: 'box', link: 'dbeN4fRjmmk' },
    { name: 'box', link: 'uZ0aPCOk6s' },
    { name: 'box', link: 'fmA55ZSyuI4' },
  ];
  const options: YouTubeProps['opts'] = {
    width: '400',
    heigh: 'auto',
    playerVars: {
      autoplay: 0, // 자동재생
    },
  };

  useEffect(() => {
    setIsMount(true);
  }, []);

  const onReady: YouTubeProps['onReady'] = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <Swiper
      className="bg-orange-400 swiperCon w-[500px] h-[500px]"
      centeredSlides
      noSwiping
      slidesPerView={1}
      freeMode
      loop
      lazyPreloadPrevNext={2}
      // direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      mousewheel
      modules={[Pagination, Mousewheel, Navigation]}>
      {videoLinkList.map((item, index) => {
        return (
          <SwiperSlide
            key={`${index}`}
            className="!h-full bg-gray-900 flex items-center justify-center">
            <span className="text-lg font-bold text-white z-[1]">
              {item.name} + {index + 1}
            </span>
            {/* <img
              src="https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?auto=format&fit=crop&q=80&w=5670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            /> */}
            {isMount && (
              <Youtube
                style={{
                  pointerEvents: 'none',
                  backgroundColor: 'red',
                }}
                // ref={ifreamRef}
                videoId={item.link}
                opts={options}
                onReady={onReady}
                onEnd={(e: any) => {
                  e.target.stopVideo(0);
                }}
              />
            )}
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

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
}
