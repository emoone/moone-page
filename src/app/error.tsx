'use client';

type ErrorUIProps = {
  error: unknown;
  reset: () => void;
};

export default function ErrorUI({ error, reset }: ErrorUIProps) {
  console.log('ErrorUi', { error, reset });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-4xl font-bold">Oops! Something went wrong.</h1>
      <p className="mb-8 text-lg text-gray-600">
        We apologize for the inconvenience. Please try again later.
      </p>
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={reset}>
        Retry
      </button>
    </div>
  );
}
