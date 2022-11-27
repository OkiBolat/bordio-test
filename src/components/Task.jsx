import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
export const Task = ({ handler, children, card, index,  background = "#fff", info = { text: 'Task', time: '0,2h' } }) => {
  const { time, text } = info;

  const TaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 15px;
    gap: 10px;
    background: ${background};
    max-height: 84px;
    height: 100%;
    border-radius: 8px;
    margin-top: 10px;
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
          <Task>{text}</Task>
          <Task>{time}</Task>
        </TaskContainer>
      )}
    </Draggable>
  )
}
