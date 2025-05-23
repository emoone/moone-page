import * as React from 'react';

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
      className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen">
      {/* <LoadingComponent /> */}
    </section>
  );
}
