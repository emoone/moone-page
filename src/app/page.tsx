import dynamic from 'next/dynamic';
import { use } from 'react';

const HomeComponent = dynamic(
  () => import('../components/home/HomeComponent'),
  {
    ssr: false,
    // loading: () => {
    //   return <p>Component is Loading..., please Waite</p>;
    // },
  },
);

// const HomeComponent = lazy(() => import('../components/home/HomeComponent'));
const session = null;

export default async function Home() {
  return (
    <main className={'main'}>
      {/* <Suspense fallback={<Loading />}> */}
      <HomeComponent />
      {/* </Suspense> */}
    </main>
  );
}
