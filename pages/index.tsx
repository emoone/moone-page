import type { NextPage } from "next";
import { useEffect } from "react";
import WebFont from "webfontloader";
import HomeComponent from "../src/components/home/HomeComponent";
import TheLayout from "../src/components/theLayout/TheLayout";

const Home: NextPage = () => {
  return (
    <TheLayout>
      <HomeComponent />
    </TheLayout>
  );
};

export default Home;
