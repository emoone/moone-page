import Image from "next/image";
import Link from "next/link";
import { base64 } from "./GnbMenu";

const LnbMenu = () => {
  const lnbArray = [
    { menu: "曜日連載", path: "/daily" },
    { menu: "新着", path: "/new" },
    { menu: "TOP100", path: "/top100" },
    { menu: "キャンペーン", path: "/event" },
  ];

  return (
    <div
      id="lnbMenu"
      className="max-w-[1024px] w-[100%] x-[10px] md:px-[15px] lg:px-[10px]  truncate"
    >
      <nav id="lnbMenuNav">
        <div className="m_nav_inner flex justify-between items-center ">
          <ul className="flex justify-between w-[100%] md:justify-start h-[2.4rem] leading-[2.4rem] text-center  md:max-w-[500px]">
            {lnbArray.map((item, index) => {
              return (
                <li
                  key={`lnb-item-${index}`}
                  className="active grow-[1] h-[inherit]"
                >
                  <Link href={item.path} passHref>
                    <a className="h-[inherit] bg-[#ddd]">{item.menu}</a>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="btn_introduce hidden md:block">
            <Link href="/newUserGuide" passHref>
              <a className="flex gap-[4px] items-center">
                入門ガイド
                <div className="w-[8px]">
                  <Image
                    src="/images/svg/arw_more.svg"
                    quality={100}
                    layout="responsive"
                    width="8px"
                    height="18px"
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default LnbMenu;
