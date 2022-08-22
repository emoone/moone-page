import styled from "@emotion/styled";
import { ComicItemComponent } from "../common/comicItem";
import TheLayout from "../theLayout/TheLayout";

interface PropType {
  data?: any;
}

const EventTheme = (props: PropType) => {
  const { data } = props;

  return (
    <TheLayout>
      <ComicItemStyled className="container ">
        <div className="inner-test grid grid-cols-repeat-fit gap-x-defaultX gap-y-defaultY">
          {data.map((item: any, index: number) => {
            return (
              <ComicItemComponent
                key={`comic-item-${index}`}
                thumbNail={item.titleVerticalThumbnail.webp[0].path}
                thumbNailWidth={item.titleVerticalThumbnail.webp[0].width}
                thumbNailHeight={item.titleVerticalThumbnail.webp[0].height}
                comicId={item.comicId}
                title={item.information.title}
                viewCount={item.information.viewCount}
                likeCount={item.information.likeCount}
              />
            );
          })}
        </div>
      </ComicItemStyled>
    </TheLayout>
  );
};
export default EventTheme;

const ComicItemStyled = styled.div`
  &.container {
    max-width: 1024px;
    margin: auto;
    display: block;
    /* background-color: gray; */
  }

  .inner {
    display: grid;
    gap: 20px 20px;
    grid-template-columns: repeat(6, minmax(100px, 1fr));

    @media (max-width: 1024px) {
      grid-template-columns: repeat(4, minmax(100px, 1fr));

      @media (max-width: 767px) {
        grid-template-columns: repeat(3, minmax(100px, 1fr));
        gap: 10px 10px;

        @media (max-width: 375px) {
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        }
      }
    }
  }

  /* comic item 영역 */
  .item-con {
    & > p {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .thumb-area {
    position: relative;
  }

  .unblur {
    animation: unblur 0.5s linear;
  }

  @keyframes unblur {
    from {
      filter: blur(20px);
    }
    to {
      filter: blur(0);
    }
  }

  /* comic item 영역 */
`;

const ComicInfoStyled = styled.div`
  &.comic-info {
    height: 4rem;

    & .txt-area {
      justify-content: center;
      align-items: center;
      display: flex;

      & .span-badge {
        margin-right: 3px;
        display: inherit;
      }

      & .comic-tit {
        font-size: 0.9rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #333;
        letter-spacing: -0.2px;
        text-align: left;
        position: relative;
        flex: 1;
        padding: 2px 0 1px;
      }
    }

    & .view-area {
      font-size: 0.65rem;
      color: #a6a6a6;
      height: 1rem;
      margin-right: 0;
      padding-right: 1px;
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      overflow: hidden;
      flex-shrink: 0;
      margin-top: 1px;
    }

    & .badge-area {
      height: 20px;
      display: flex;
      align-items: center;
      margin-top: 3px;
    }
  }
`;
