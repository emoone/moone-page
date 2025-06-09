import dynamic from 'next/dynamic';

const HomeComponent = dynamic(() => import('../components/home/HomeComponent'));

export default async function Home() {
  return (
    <main className={'main'}>
      {/* <Suspense fallback={<Loading />}> */}
      <HomeComponent />
      {/* </Suspense> */}
    </main>
  );
}
