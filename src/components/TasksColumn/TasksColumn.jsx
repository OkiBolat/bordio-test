import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Task } from '../Task/Task';
import { Container, TaskHeader, TaskWrp, Title, TitleCount, TitleText } from './styled';



export const TasksColumn = ({ row = {id: '', title: '', cards_ids : []}, data }) => {
  return (
    <Container>
      <TaskHeader>
        <Title>
          <TitleText>{row.title}</TitleText>
          <TitleCount>{row.cards_ids?.length}</TitleCount>
        </Title>
      </TaskHeader>
      {<Droppable droppableId={row.id}>
        {(provided) => (
          <TaskWrp {...provided.droppableProps} ref={provided.innerRef}>
            {data.map((card, index) => (
              <Task title={row.title} key={card.id} card={card} background='#FEC6B7' index={index} />
            ))}{provided.placeholder}
          </TaskWrp>
        )}
      </Droppable>}
    </Container>
  )
};
