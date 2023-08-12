import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { getPicsumPhotos } from './api/picsumPhoto/getPicsumPhotos';

const HomeComponent = dynamic(
  () => import('../components/home/HomeComponent'),
  {
    ssr: false,
    // loading: () => {
    //   return <p>Component is Loading..., please Waite</p>;
    // },
  },
);

export default async function Home() {
  const imgLists = await getPicsumPhotos();

  return (
    <main className={'main'}>
      {/* <Suspense fallback={<Loading />}> */}
      <HomeComponent imgLists={imgLists} />
      {/* </Suspense> */}
    </main>
  );
}
