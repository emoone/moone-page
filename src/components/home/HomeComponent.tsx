'use client';

import { use, useEffect } from 'react';

import Image from 'next/image';

export interface ImgItemType {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
export interface PropsType {
  topics: string[];
  imgLists: ImgItemType[];
}

/**
 * { cache: 'force-cache' } : build시에 가져온 데이터가 사용되고 직접 revalidate하기 전까지는 데이터가 캐싱되는 방식. getStaticProps와 같음. default.
 * { cache: 'no-store' } : 매 요청시마다 서버에서 새로 fetch. getServerSideProps와 유사.
 * { next: { revalidate: 10 } } : next 옵션을 줌으로서, cache 돼고있는 data 들을 revalidate 시킬 수 있음. 값은 초 단위.
 */
async function getTopicData() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js', {
    // cache: 'no-store',
  }).then((res: any) => {
    return res.json();
  });

  return res.topics;
}

async function getImgListData() {
  const res = await fetch('https://picsum.photos/v2/list', {
    // cache: 'no-store',
  }).then((res: any) => {
    return res.json();
  });

  return res;
}

export default function HomeComponent() {
  // const topics: string[] = use(getTopicData());
  const imgLists: ImgItemType[] = use(getImgListData());

  useEffect(() => {
    console.log('????', imgLists, process.env.NEXT_PUBLIC_ENVIRONMENT);
  }, []);
  return (
    <section className="text-white">
      HomeArea
      {/* <Player /> */}
      <h1 className="text-white">TopicsListArea</h1>
      {/* <ul>
        {topics &&
          topics.map((item, index) => {
            return (
              <li className="dark:text-white" key={`${index}-${item}`}>
                {item}
              </li>
            );
          })}
      </ul> */}
      <h2>ImageArea</h2>
      <ul>
        {imgLists &&
          imgLists.map((img, index) => {
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
      </ul>
    </section>
  );
}
