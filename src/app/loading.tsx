import * as React from 'react';
import cn from 'clsx';
import LoadingComponent from '@/components/loading/Loading';

/**
 * 페이지 용 loadingComponent
 * @param props
 * @param ref
 * @returns
 */
export default function Loading(
  props: { className?: string },
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const { className = '', ...other } = props;

  return (
    <section
      id="loadingCon"
      className="fiex w-screen h-screen flex items-center justify-center">
      <LoadingComponent />
    </section>
  );
}
