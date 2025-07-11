'use client';

import { useTypewriter } from '@/lib/hooks/useTypewriter';

type PropsType = {
  error: unknown;
  reset: () => void;
};

export default function ErrorUI({ error, reset }: PropsType) {
  console.log('ErrorUi', { error, reset });
  const { currentText } = useTypewriter({
    text:
      error instanceof Error
        ? error.message
        : 'We apologize for the inconvenience. Please try again later.',
    speed: 100,
    delayBetweenLoop: 2000,
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-4xl font-bold">
        {'Oops! Something went wrong.'}
      </h1>
      <p className="mb-8 text-lg whitespace-pre-wrap">
        <input
          className="bg-transparent border-none outline-none caret-white w-auto text-center"
          value={currentText}
          autoFocus
        />
      </p>
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={reset}
      >
        Retry
      </button>
    </div>
  );
}
