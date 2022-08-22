import styled from "@emotion/styled";

export const ThumbNailStyled = styled.div`
  &.thub-area {
    position: relative;
  }
`;

export const ComicInfoStyled = styled.div`
  &.comic-info {
    height: 4rem;
    overflow: hidden;

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
        /* color: #333; */
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
