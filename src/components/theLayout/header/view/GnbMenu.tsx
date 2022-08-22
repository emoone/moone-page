import Image from "next/image";
import Link from "next/link";

const GnbMenu = () => {
  const menuRight = [
    { imgPath: "/images/svg/ico_head_search.svg", alt: "search" },
    { imgPath: "/images/svg/ico_head_charge.svg", alt: "charge" },
    { imgPath: "/images/svg/ico_giftbox.svg", alt: "giftbox" },
    { imgPath: "/images/svg/ico_head_menu.svg", alt: "menu" },
  ];
  return (
    <div
      id="gnbMenu"
      className="flex justify-center items-center max-w-[1024px] flex-wrap px-[10px] md:px-[15px] lg:px-[10px] w-[100%] "
    >
      {/* 로고 영역 */}
      <div id="logo" className="ssm:mr-auto w-[120px] mr-[0]">
        <Link href="/" passHref>
          <a className="block">
            <Image
              src="/images/common/logo_toptoonplus_300x80.png"
              blurDataURL="empty"
              quality="lazy"
              layout="fixed"
              width="120px"
              height="40px"
            />
          </a>
        </Link>
      </div>
      {/* 로고 영역 */}

      {/* 검색영역 */}
      <div id="searchPC" className="hidden md:block">
        <form action="#">
          <input
            type="search"
            placeholder="#キーワードを入力してください"
            name="search"
          />
          <button type="submit">
            <i className="ico_search">
              <Image
                src="/images/svg/ico_search.svg"
                quality="lazy"
                layout="fixed"
                width={22}
                height={22}
              />
            </i>
          </button>
        </form>
      </div>
      {/* 검색영역 */}

      {/* MenuRight */}
      <div id="menuRight" className="ml-[0] ssm:ml-auto">
        <ul className="flex align-center gap-[10px]">
          <li className="p-[10px] block md:hidden">
            <Link href="/" passHref>
              <a className="block">
                <span className="icon_search">
                  <Image
                    src="/images/svg/ico_head_search.svg"
                    quality="lazy"
                    layout="fixed"
                    width={22}
                    height={22}
                  />
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a className="p-[10px] block">
                <span className="icon_charge">
                  <Image
                    src="/images/svg/ico_head_charge.svg"
                    quality="lazy"
                    layout="fixed"
                    width={22}
                    height={22}
                  />
                </span>
              </a>
            </Link>
          </li>
          <li className="relative">
            <Link href="/" passHref>
              <a className="p-[10px] block">
                <span className="icon_gift">
                  <Image
                    src="/images/svg/ico_giftbox.svg"
                    quality="lazy"
                    layout="fixed"
                    width={22}
                    height={22}
                  />

                  <span className="num_gift absolute top-0 right-0">3</span>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a className="p-[10px] block">
                <span className="icon_service_menu">
                  <Image
                    src="/images/svg/ico_head_menu.svg"
                    quality="lazy"
                    layout="fixed"
                    width={22}
                    height={22}
                  />
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      {/* MenuRight */}
    </div>
  );
};
export default GnbMenu;
