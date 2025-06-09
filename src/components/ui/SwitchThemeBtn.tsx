'use client';

import { useCallback, useEffect, useState } from 'react';

import cn from 'clsx';
import { useTheme } from 'next-themes';

/**
 * ANCHOR: 테마(light, dark) 변경 Component
 * 문서 링크: https://mui.com/material-ui/react-switch/
 * @returns
 */
export default function SwitchThemeBtn() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 클라이언트 사이드 마운트 후에만 테마 버튼 표시
  useEffect(() => {
    setMounted(true);
  }, []);

  const themeHandler = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  // 마운트되기 전까지는 플레이스홀더 버튼 표시
  if (!mounted) return null;

  return (
    <button
      onClick={themeHandler}
      aria-label="Toggle Theme"
      className={`
        w-8 h-8 rounded-full
        flex items-center justify-center
        bg-transparent dark:bg-gray-700
        transition-colors duration-300
        relative overflow-hidden
        shadow-md hover:shadow-lg
         ring-black/10 dark:ring-white/10
      `}
    >
      {/* 🌙 Dark Icon */}
      <span
        className={cn(
          'absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out transform',
          {
            'opacity-100 scale-100 rotate-0 z-10': theme === 'light',
            'opacity-0 scale-0 rotate-180 z-0': theme === 'dark',
          },
        )}
      >
        🌙
      </span>

      {/* ☀️ Light Icon */}
      <span
        className={cn(
          'absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out transform',
          {
            'opacity-100 scale-100 rotate-0 z-10': theme === 'dark',
            'opacity-0 scale-0 rotate-180 z-0': theme === 'light',
          },
        )}
      >
        ☀️
      </span>
    </button>
  );
}
