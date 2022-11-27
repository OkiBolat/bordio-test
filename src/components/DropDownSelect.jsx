/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";

const DropDownStyled = styled.button`
position: relative;
cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px 8px 20px;
  gap: 8px;
  width: 114px;
  height: 40px;
  background: #E1E4E7;
  border-radius: 50px;
  flex: none;
  order: 1;
  flex-grow: 0;
  border: none;
  transition: 0.3s;
  &:hover {
    transform: scale(1.02)
  }
`;
const ArrowStyled = styled(Arrow)`
path: {
  fill: black
}
`
const List = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 6px;
position: absolute;
width: 132px;
height: 132px;
background: #FFFFFF;
box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
border-radius: 8px;
top: 40px;
`
const ListItem = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 8px;
gap: 4px;
width: 120px;
height: 40px;
background: #F5F8FA;
border-radius: 4px;
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
`
export const DropDownSelect = ({ handler, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropDownStyled onClick={() => setIsOpen(!isOpen)}>
      {children}
      <ArrowStyled fill="black" />
      {isOpen &&
        <List>
          <ListItem>Board view</ListItem>
          <ListItem>Table view</ListItem>
          <ListItem>Kanban</ListItem>
        </List>}
    </DropDownStyled>
  )
}
