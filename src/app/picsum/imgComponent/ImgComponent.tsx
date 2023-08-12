'use client';

import Image from 'next/image';
import { PhotosItemType } from '@/app/api/picsumPhoto/getPicsumPhotos';

export default function ImgComponent({
  imgLists,
}: {
  imgLists: PhotosItemType[];
}) {
  return (
    <section>
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
      </ul>
    </section>
  );
}
