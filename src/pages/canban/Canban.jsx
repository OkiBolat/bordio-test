import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CanbanHeader } from './CanbanHeader';
import { CanbanMain } from './CanbanMain';
import { CanbanSidebar } from './CanbanSidebar';
import { CanbanTools } from './CanbanTools';

const Main = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Canban = () => {
  const rows = useSelector(store => store.canban.rows)
  return (
    <>
      <CanbanSidebar />
      <CanbanTools />
      <Main>
        <CanbanHeader />
        <CanbanMain data={rows} />
      </Main>
    </>
  )
}