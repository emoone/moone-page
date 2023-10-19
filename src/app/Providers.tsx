'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem={false} // 시스템 테마 활성화
      enableColorScheme={false} // color-scheme 비활성화
      attribute="class">
      {children}
    </ThemeProvider>
  );
}
