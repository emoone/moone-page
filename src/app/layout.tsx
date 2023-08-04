import '../styles/main.css';

import { Inter, Poppins } from 'next/font/google';

import Head from './head';
import Link from 'next/link';
import type { Metadata } from 'next';
import Providers from './Providers';
import SwitchThemeBtn from '@/components/ui/SwitchThemeBtn';
import cn from 'clsx';

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
    { name: 'Dashbord', link: '/dashbord' },
    { name: 'Post', link: '/dashbord/post' },
  ];

  /**
   * suppressHydrationWarning관하여
   *
   * 에러 메세지: Warning: Extra attributes from the server: class,style
   * 원인: 확장 UI사용시 server와 client rendering 사이에 불일치 발생하여 뜨는것으로 나타남.
   * 실제로 DOM에는 속성이 정상추가되는걸로 확인됨.
   */
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Head />
      <body className={cn(`${popins.variable}`)}>
        <Providers>
          <header className={cn('text-[#121212]')}>
            <SwitchThemeBtn />
            {/* <MUISwitch /> */}
            <Link href="/">HOME</Link>
            <nav className={'flex '}>
              {headerMenus.map((c, index) => {
                return (
                  <Link
                    href={{ pathname: c.link, query: { slug: 'second' } }}
                    key={`${c.name}-${index}`}>
                    {c.name}
                  </Link>
                );
              })}
            </nav>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
