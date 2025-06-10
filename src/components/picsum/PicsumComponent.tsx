'use client';

import { PhotosItemType } from '@/app/api/picsumPhoto/getPicsumPhotos';
import Image from 'next/image';

interface PropsType {
  imgLists: PhotosItemType[];
}
const PicsumComponent = (props: PropsType) => {
  const { imgLists } = props;

  return (
    <section>
      <h1>PicsumImgPageArea</h1>

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
        <div id="endOfViewer"></div>
      </ul>
    </section>
  );
};

export default PicsumComponent;
