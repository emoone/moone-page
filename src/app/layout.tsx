import '../styles/main.css';

import { Inter, Poppins } from 'next/font/google';

import Head from './head';
import Link from 'next/link';
import type { Metadata } from 'next';
import SwitchThemeBtn from '@/components/ui/SwitchThemeBtn';
import cn from 'clsx';
import dynamic from 'next/dynamic';

const ThemeProviders = dynamic(() => import('./_providers/ThemeProviders'), {
  ssr: false,
});

const popins = Poppins({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-popins',
});

export const metadata: Metadata = {
  title: 'Moon"s Blog',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const headerMenus = [
    { name: 'Home', link: '/', query: null },
    { name: 'PicsumPhoto', link: '/picsum', query: null },
    { name: 'Dashbord', link: '/dashbord', query: null },
    { name: 'Post', link: '/dashbord/post', query: { slug: 'second' } },
  ];

  /**
   * suppressHydrationWarning관하여
   * 서버 사이드 렌더링을 사용하는 경우, 일반적으로 서버와 클라이언트가 다른 내용을 렌더링할 때 경고가 표시 됨
   * 그러나 매우 드물게 정확히 일치시키는 게 힘들거나 불가능 함
   * 예를 들어 타임 스탬프 같은 경우 서버와 클라이언트에서는 다를 것으로 예상 됨
   * suppressHydrationWarning을 true로 설정하면, React는 어트리뷰트와 그 엘리먼트 내용의 불일치에 대해 경고하지 않음
   * 바로 밑 한 단계 깊이를 기준으로만 작동하며 해결책으로 사용하도록 되어 있습니다
   * 남용하지 마세요. 이벤트 보충에 대한 자세한 내용은 ReactDOM.hydrateRoot() 문서를 참조해주세요
   * 에러 메세지: Warning: Extra attributes from the server: class,style
   * 원인: 확장 UI사용시 server와 client rendering 사이에 불일치 발생하여 뜨는것으로 나타남
   * 실제로 DOM에는 속성이 정상추가되는걸로 확인됨.
   */
  return (
    <html lang="en" suppressHydrationWarning={false}>
      <Head />
      <body className={cn(`${popins.variable}`)}>
        <ThemeProviders>
          <header
            className={cn(
              'headerCon flex h-[48px] justify-between sticky top-0 left-0',
            )}>
            <SwitchThemeBtn />
            <nav
              className={
                'flex h-full gap-x-1 items-center border-b-[1px] border-b-gray-400 border-solid'
              }>
              {headerMenus.map((c, index) => {
                return (
                  <Link
                    className={cn('leading-[200%]', {
                      ['font-medium']: true,
                    })}
                    href={{ pathname: c.link, query: c.query }}
                    key={`${c.name}-${index}`}>
                    {c.name}
                  </Link>
                );
              })}
            </nav>
          </header>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
