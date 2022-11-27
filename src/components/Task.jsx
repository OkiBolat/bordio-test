import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled, { css } from "styled-components";
export const Task = ({ handler, children, card, index, background = "#fff", info = { text: 'Task', time: '0,2h' }, title }) => {
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
          <Task>{text}</Task>
          <Task>{time}</Task>
        </TaskContainer>
      )}
    </Draggable>
  )
}
