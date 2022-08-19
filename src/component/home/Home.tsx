import { TheLayout } from "../layout";
import Image from "next/image";

const Home = () => {
  const blurHashData5x7 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAQAAABqrk9lAAAAEElEQVR42mO8WM8ABYwUMwGJJwk48unbaQAAAABJRU5ErkJggg=="; // 5:7 비율

  return (
    <TheLayout>
      <div>HomeComponent TheLayout으로 감싸기</div>
      <div>내용추가</div>
      <div>
        <h1>TEST IMG</h1>
        adsfasf
        <div className="flex wd-[100%] jutify-center">
          <div>
            <Image
              src="/images/test.jpeg"
              blurDataURL={blurHashData5x7}
              placeholder="blur"
              layout="responsive"
              width={1440}
              height={960}
              alt="img"
            />
          </div>
          <div>
            <Image
              src="/images/test.jpeg"
              blurDataURL={blurHashData5x7}
              placeholder="blur"
              layout="responsive"
              width={1200}
              height={630}
              alt="img"
            />
          </div>
        </div>
      </div>
    </TheLayout>
  );
};
export default Home;
