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

// const HomeComponent = lazy(() => import('../components/home/HomeComponent'));
const session = null;

export default async function Home() {
  /**
   * { cache: 'force-cache' } : build시에 가져온 데이터가 사용되고 직접 revalidate하기 전까지는 데이터가 캐싱되는 방식. getStaticProps와 같음. default.
   * { cache: 'no-store' } : 매 요청시마다 서버에서 새로 fetch. getServerSideProps와 유사.
   * { next: { revalidate: 10 } } : next 옵션을 줌으로서, cache 돼고있는 data 들을 revalidate 시킬 수 있음. 값은 초 단위.
   */
  const res = await fetch('https://api.github.com/repos/vercel/next.js', {
    // cache: 'no-store',
  }).then((res: any) => {
    // const data = res.json();
    return res.json();
  });

  const topics = res.topics;

  const imgLists = await fetch('https://picsum.photos/v2/list', {
    cache: 'no-store',
  }).then((res: any) => {
    return res.json();
  });

  return (
    <main className={'main'}>
      {/* <Suspense fallback={<Loading />}> */}
      <HomeComponent topics={topics} imgLists={imgLists} />
      {/* </Suspense> */}
    </main>
  );
}
