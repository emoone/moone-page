/**
 * nextimage 사용을 위한 미들웨어? 처리
 * @param param0
 * @returns
 */
export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  return `${src}?w=${width}&q=${quality || 75}`;
}
