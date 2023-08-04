'use client';

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

export default function HomeComponent(props: PropsType) {
  const { topics, imgLists } = props;

  console.log('????', imgLists, topics);
  return (
    <section className="text-white">
      HomeArea
      {/* <Player /> */}
      <h1 className="text-white">TopicsListArea</h1>
      <ul>
        {topics &&
          topics.map((item, index) => {
            return (
              <li className="dark:text-white" key={`${index}-${item}`}>
                {item}
              </li>
            );
          })}
      </ul>
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
