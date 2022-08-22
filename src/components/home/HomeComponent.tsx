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
          여기는 Home 메인 영역
        </h1>
        {/* <hr />
        <h1>스크롤 테스트</h1>
        <hr /> */}

        <p contentEditable="true">This is a paragraph</p>

        <button
          type="button"
          className="bg-indigo-500 inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500"
          disabled
        >
          <svg
            className="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            viewBox="0 0 24 24"
          ></svg>
          Processing...
        </button>
      </section>
    </>
  );
};

export default HomeComponent;
