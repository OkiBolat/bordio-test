import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { getCardsThunk, moveCardThunk } from '../redux/canban/actionCreators';
import { rowsListSelector } from '../redux/canban/selectors';
import { TasksColumn } from './TasksColumn';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  // width: 100%;
  height: 100%;
  overflow-x: scroll;
`
export const MainTasks = () => {
  const dispatch = useDispatch()
  const rows = useSelector(rowsListSelector)

  // useEffect(() => {
  //   dispatch(getCardsThunk())
  // }, [dispatch])

  const onDragEnd = (data) => {
    if (!data.destination) return;

    dispatch(moveCardThunk(data))
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container >
        {Object.values(rows).map(row => <TasksColumn data={row} />)}
      </Container >
    </DragDropContext>
  )
}