import styled from "@emotion/styled";

interface GridItemsProps {
  index: number;
}
const GridItems = (props: GridItemsProps) => {
  const { index } = props;
  return (
    <>
      <div className="grid-item" key={`grid-item-${index}`}>
        <span>{index}</span>
      </div>
    </>
  );
};

export default GridItems;

const GridItemStyled = styled.div``;
