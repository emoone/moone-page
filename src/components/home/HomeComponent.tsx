import Image from 'next/image';
import { getPicsumPhotos } from '@/app/api/picsumPhoto/getPicsumPhotos';

export default async function HomeComponent() {
  const imgLists = await getPicsumPhotos();

  // console.log('????', imgLists, process.env.NEXT_PUBLIC_ENVIRONMENT);

  return (
    <section>
      HomeArea
      {/* <Player /> */}
      <h1>TopicsListArea</h1>
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
        {imgLists.map((img, index) => {
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
