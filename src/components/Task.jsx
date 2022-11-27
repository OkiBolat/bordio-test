import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled, { css } from "styled-components";

export const Task = ({ card, index,  title }) => {

  const TaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 15px;
    gap: 10px;
    background: ${card.color};
    max-height: 84px;
    height: 100%;
    border-radius: 8px;
    margin-top: 10px;
   
  ${() => title === 'Completed' && css`
  background: #F0F0F0;
  color: #A5A5A5;
  text-decoration: line-through;
`}
  `
  const Task = styled.div`

  `

  return (
    <Draggable draggableId={String(card.id)} index={index}>
      {(provided) => (
        <TaskContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <Task>{card.text}</Task>
          <Task>{card.time}</Task>
        </TaskContainer>
      )}
    </Draggable>
  )
};
