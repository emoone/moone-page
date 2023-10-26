import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { unstable_getImgProps as getImgProps } from 'next/image';
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
  const common = { alt: 'Test', width: 800, height: 400 };

  const {
    props: { srcSet: dark },
  } = getImgProps({ ...common, src: '/dark.pnga' });
  const {
    props: { srcSet: light, ...rest },
  } = getImgProps({ ...common, src: '/light, ...rest.pnga' });

  console.log('???', rest, light, dark);

  return (
    <main className={'main'}>
      {/* <Suspense fallback={<Loading />}> */}
      <HomeComponent />
      {/* </Suspense> */}
    </main>
  );
}
