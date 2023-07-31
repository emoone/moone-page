import cn from 'clsx';

interface ClipProps {
  width?: number | string;
  height?: number | string;
  currentColor?: string;
  className?: string;
}

/**
 * 클립 아이콘 Component
 * @param props  width?: number;
 * @param props height?: number;
 * @param props currentColor?: string;
 * @param props className?: string;
 * @returns
 */
const Clip = (props: ClipProps) => {
  const {
    width = 16,
    height = 16,
    currentColor = '#fff',
    className = '',
  } = props;
  return (
    <svg
      className={cn('iconClip inline-block', className)}
      fill={currentColor}
      viewBox="0 0 20 20"
      width={width}
      height={height ? height : width}
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        stroke={currentColor} // 라인컬러
        d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
      />

      <path
        fillRule="nonzero"
        stroke={currentColor}
        d="M210,0  h90 v90 h-90 z
           M230,20 v50 h50 v-50 z"
      />
    </svg>
  );
};
export default Clip;
