'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

/**
 * 해당 컨테이너에 모든 provider들의 모음
 * layout은 서버영역 이기 때문에 여기서 선언해야 함
 * @param props
 * @returns
 */
const ProviderContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      enableSystem={false} // 시스템 테마 활성화
      enableColorScheme={false} // color-scheme 활성화
      attribute="class"
    >
      {children}
    </ThemeProvider>
  );
};

export default ProviderContainer;
