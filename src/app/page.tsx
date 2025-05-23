import dynamic from 'next/dynamic';

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
  return (
    <main className={'main'}>
      {/* <Suspense fallback={<Loading />}> */}
      <HomeComponent />
      {/* </Suspense> */}
    </main>
  );
}
