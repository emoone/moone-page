import cn from 'clsx';

/**
 * 로딩 component
 * 재사용 목적임으로 용도에 따라 props 추가예정
 * 부모에서 용도에 맞게 CSS 처리
 * @returns
 */
export default function LoadingComponent() {
  return (
    <div
      className={cn(
        'inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
        'dark:border-[#5468ff] dark:border-r-transparent',
      )}
      role="status">
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}
