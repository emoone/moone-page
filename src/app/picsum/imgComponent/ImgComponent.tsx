'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { PhotosItemType } from '@/app/api/picsumPhoto/getPicsumPhotos';
import cn from 'clsx';

interface PropsType {
  imgLists: PhotosItemType[];
}
const ImgComponent = (props: PropsType) => {
  const { imgLists } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [speed, setSpeed] = useState<number>(8);
  const requestRef = useRef<number>(0);

  const clickHandler = useCallback(() => {
    setIsChecked(prev => !prev);
  }, [isChecked]);

  useEffect(() => {
    const realSpeed = speed + 8;
    const perPx = realSpeed / 2;
    const end = document.getElementById('endOfViewer'); // 뷰어 전체 길이
    const viewerHeight = end ? end.offsetTop : window.innerHeight;

    if (!isChecked) {
      window.cancelAnimationFrame(requestRef.current);
    } else {
      console.log('isChecked!!!!', isChecked);
      let pos = 0;

      /**
       * interval처럼 requestAnimationFrame의 callback(move함수)이 조건에 만족할때까지 재귀적으로 실행된다.
       */
      const move = () => {
        window.cancelAnimationFrame(requestRef.current);
        scrollTo({
          top: pos + perPx,
        });
        pos = pos + perPx; // 변화된 현재 위치값 재할당
        console.log('pos', pos);
        if (viewerHeight - pos - window.innerHeight > 0) {
          // requestAnimationFrame(1000ms/60frame)
          // - 리페인트 이전에 실행할 콜백을 인자로 받아 부드럽게 움직이도록 해준다.
          // - setInterval, setTimeout과 비슷하지만 프레임을 신경쓰느냐 아니냐의 차이가 있어 코드가 복잡해 질수록 뚝뚝 끊기게 된다.
          requestRef.current = window.requestAnimationFrame(move); // 조건에 만족할때까지 callback 실행
        } else {
          window.cancelAnimationFrame(requestRef.current);
        }
      };

      move(); // 한번실행
    }
  }, [isChecked]);

  return (
    <section>
      <h1>PicsumImgPageArea</h1>
      <button
        type="button"
        className={cn(
          'rounded-[50%] w-[80px] h-[80px] font-semibold fixed right-7 top-7',
          {
            ['bg-[#f02d37] text-white']: isChecked,
            ['bg-[#ddd] text-black']: !isChecked,
          },
        )}
        onClick={clickHandler}>
        {isChecked ? 'checked' : 'disable'}
      </button>

      <ul>
        {imgLists.map((img, index) => {
          <h1>PicsumListArea</h1>;
          return (
            <li key={`${index}-${img.id}-${img.url}`}>
              <div>
                <Image
                  className="img-item"
                  src={img.download_url}
                  placeholder="empty"
                  width={img.width}
                  height={img.height}
                  priority={false}
                  loading="lazy"
                  alt=""
                />
              </div>
              <div>{img.id}</div>
              <div>{img.author}</div>
            </li>
          );
        })}
        <div id="endOfViewer"></div>
      </ul>
    </section>
  );
};

export default ImgComponent;
