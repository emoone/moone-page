import { TheLayout } from "../layout";

const Home = () => {
  return (
    <TheLayout>
      <div>HomeComponent TheLayout으로 감싸기</div>
      <div>내용추가</div>
      <div>
        <h1>TEST IMG</h1>
        <div className="flex wd-[100%] jutify-center">
          <div>
            <img src="/images/test.jpeg" alt="" />
          </div>
          <div>
            <img src="/images/test02.jpeg" alt="" />
          </div>
        </div>
      </div>
    </TheLayout>
  );
};
export default Home;
