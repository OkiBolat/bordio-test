/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { getCardsThunk, moveCardThunk } from '../../redux/canban/actionCreators';
import { cardsSelector, rowsListSelector } from '../../redux/canban/selectors';
import { TasksColumn } from '../../components/TasksColumn';

const Container = styled.div`
  min-width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  max-width: 100%;
  width: 100%;
  &::last-child {
    margin-right: 100px;
  }
}
`
export const MainTasks = () => {
  const dispatch = useDispatch();
  const rows = useSelector(rowsListSelector);

  const onDragEnd = (data) => {
    if (!data.destination) return;
    dispatch(moveCardThunk(data))
  };

  const cards = useSelector(cardsSelector);

  // const rowCards = useMemo(() => ;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container >
        {Object.values(rows).map(row => <TasksColumn row={row} data={row.cards_ids.map((id) => cards[id])} />)}
      </Container >
    </DragDropContext>
  )
}