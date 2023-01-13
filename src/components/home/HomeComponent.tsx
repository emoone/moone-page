import { Clip } from '../ui/icon';

const HomeComponent = () => {
  return (
    <>
      <section>
        <h1
          className="p-[20px] bg-[#000] text-white"
          // onClick={() => {
          //   console.log("clicked");
          //   openTestModal();
          // }}
        >
          <Clip />
          HOME AREA
        </h1>
        <hr />
        <h1>스크롤 테스트</h1>
        <div className="parent bg-orange-800 w-full h-full overflow-y-auto relative max-w-[500px] max-h-[300px] flex flex-col">
          <div className="children flex-[0_0_auto] w-[400px] text-[1rem] text-white flex items-center justify-center font-semibold h-[400px] bg-lime-500">
            children1
          </div>
          <div className="children flex-[0_0_auto] w-[400px] text-[1rem] text-white flex items-center justify-center font-semibold h-[400px] bg-fuchsia-300 sticky top-0">
            children2
          </div>
          <div className="children flex-[0_0_auto] w-[400px] text-[1rem] text-white flex items-center justify-center font-semibold h-[400px] bg-black sticky top-0">
            children3
          </div>
        </div>
        <hr />
      </section>
    </>
  );
};

export default HomeComponent;
