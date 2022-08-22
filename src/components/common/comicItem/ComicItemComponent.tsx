import Image from "next/image";
import Link from "next/link";
import { ComicInfoStyled, ThumbNailStyled } from "./styled";

interface PropType {
  thumbNail: string;
  thumbNailWidth: number;
  thumbNailHeight: number;
  comicId: number;
  title: string;
  viewCount: number;
  likeCount: number;
}
const ComicItemComponent = (props: PropType) => {
  const {
    thumbNail,
    thumbNailWidth,
    thumbNailHeight,
    comicId,
    title,
    viewCount,
    likeCount,
  } = props;

  const blurHashData5x7 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAQAAABqrk9lAAAAEElEQVR42mO8WM8ABYwUMwGJJwk48unbaQAAAABJRU5ErkJggg=="; // 5:7 비율

  const blurHashData1x1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8WA8AAicBUm5VYI8AAAAASUVORK5CYII=";

  return (
    <div className=" item-con ">
      <Link href={`/comic/${comicId}`}>
        <a>
          <ThumbNailStyled className="thumb-area">
            <Image
              src={thumbNail}
              blurDataURL={blurHashData5x7}
              placeholder="blur"
              layout="responsive"
              width={thumbNailWidth}
              height={thumbNailHeight}
              alt={title}
            />
          </ThumbNailStyled>

          <ComicInfoStyled className="comic-info">
            <p className="txt-area">
              {/* up, new 뱃지 영역 */}
              <span className="comic-tit primary text-primary">{title}</span>
            </p>

            <p className="view-area">
              {viewCount} {likeCount}
            </p>
            <p className="badge-area">Top10, FreeTicket 등 뱃지</p>
          </ComicInfoStyled>
        </a>
      </Link>
    </div>
  );
};
export default ComicItemComponent;
