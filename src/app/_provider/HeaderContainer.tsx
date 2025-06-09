'use client';

import SwitchThemeBtn from '@/components/ui/SwitchThemeBtn';
import cn from 'clsx';
import Link from 'next/link';

const MENU_LIST = [
  { name: 'Home', link: '/', query: null },
  { name: 'PicsumPhoto', link: '/picsum', query: null },
  { name: 'Dashbord', link: '/dashbord', query: null },
  { name: 'Post', link: '/dashbord/post', query: { slug: 'second' } },
  { name: 'login', link: '/auth/login' },
];
/*********************************************************************************
 * 헤더 컨테이너
 *********************************************************************************/
const HeaderContainer = () => {
  return (
    <header
      className={cn(
        'headerCon flex h-[48px] justify-between sticky top-0 left-0 items-center',
      )}
    >
      <nav
        className={
          'flex h-full gap-x-1 items-center border-b-[1px] border-b-gray-400 border-solid'
        }
      >
        {MENU_LIST.map((c, index) => {
          return (
            <Link
              className={cn('leading-[200%]', {
                ['font-medium']: true,
              })}
              href={{ pathname: c.link, query: c.query }}
              key={`${c.name}-${index}`}
            >
              {c.name}
            </Link>
          );
        })}
      </nav>

      <SwitchThemeBtn />
    </header>
  );
};
export default HeaderContainer;
