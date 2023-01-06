import { Droppable } from "react-beautiful-dnd";
import React from "react";
import styled from "@emotion/styled";
import ListItem from "./Listitem";

const ColumnHeader = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: #d4d4d4;
`;

const DraggableElement = ({
  prefix,
  elements,
}: {
  prefix: any;
  elements: any;
}) => (
  <DroppableStyles>
    <ColumnHeader>{prefix}</ColumnHeader>
    <Droppable droppableId={`${prefix}`}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {elements.map((item: any, index: number) => (
            <ListItem key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DroppableStyles>
);

export default DraggableElement;
