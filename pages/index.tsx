import HomeComponent from '../src/components/home/HomeComponent';
import type { NextPage } from 'next';
import TheLayout from '../src/components/theLayout/TheLayout';

const Home: NextPage = () => {
  return (
    <TheLayout>
      <HomeComponent />
    </TheLayout>
  );
};

export default Home;
