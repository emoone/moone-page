import { notFound } from 'next/navigation';

export interface PhotosItemType {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
/**
 * { cache: 'force-cache' } : build시에 가져온 데이터가 사용되고 직접 revalidate하기 전까지는 데이터가 캐싱되는 방식. getStaticProps와 같음. default.
 * { cache: 'no-store' } : 매 요청시마다 서버에서 새로 fetch. getServerSideProps와 유사.
 * { next: { revalidate: 10 } } : next 옵션을 줌으로서, cache 돼고있는 data 들을 revalidate 시킬 수 있음. 값은 초 단위.
 */
export async function getPicsumPhotos() {
  const res = await fetch('https://picsum.photos/v2/list', {
    // cache: 'no-store',
  });

  const photos = (await res.json()) as PhotosItemType[];

  if (photos.length === 0) {
    // 에러 핸들링, next 자체 제공인데 뭔지 모름
    notFound();
  }

  return photos;
}
