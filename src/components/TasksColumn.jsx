import React, { useMemo } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { cardsSelector } from '../redux/canban/selectors';
import { RowTitile } from './RowTitile';
import { Task } from './Task';

export const TasksColumn = ({ data }) => {

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  `

  const TaskWrp = styled.div`
  min-height: 100vh;
  background: #fff;
  width: 100%;
  border: 1px solid #F3F3F3;
  padding: 10px;
  min-width: 290px;
}`;
  const TaskHeader = styled.div` 
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
  const cards = useSelector(cardsSelector)

  const rowCards = useMemo(
    () => data.cards_ids.map((id) => cards[id]),
    [cards, data]
  )

  return (
    <Container>
      <TaskHeader>
        <RowTitile info={{ text: data.title, count: data.cards_ids.length }} />
      </TaskHeader>

      {<Droppable droppableId={data.id}>
        {(provided) => (
          <TaskWrp {...provided.droppableProps} ref={provided.innerRef}>
            {rowCards.map((card, index) => (
              <Task title={data.title} key={card.id} card={card} background='#FEC6B7' index={index} />
            ))}{provided.placeholder}
          </TaskWrp>
        )}
      </Droppable>}
    </Container>

  )
};

