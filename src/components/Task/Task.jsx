import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskContainer } from "./styled";

export const Task = ({ card, index, title }) => {

  return (
    <Draggable draggableId={String(card.id)} index={index}>
      {(provided) => (
        <TaskContainer
          title={title}
          color={card.color}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <div>{card.text}</div>
          <div>{card.time}</div>
        </TaskContainer>
      )}
    </Draggable>
  )
};
