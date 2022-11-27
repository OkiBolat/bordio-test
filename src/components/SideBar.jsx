/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from "../assets/icons/bordio-logo.svg";
import image from "../assets/icons/test.png"
import { InputSideBar } from './InputSideBar';
import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";

const Container = styled.div`
  max-width: 11.41%;
  width: 100%;
  background-color: #0F1D40;
  // padding: 15px;
  min-width: 219px;
`;

const StyledLogo = styled(Logo)`
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;

`;

const SideBarMain = styled.div`
  margin-top:10px;
  display: flex;
  flex-direction: column;
`;

const WorkSpaceInfo = styled.div`
display: flex;
justify-content: flex-start;
padding-left:15px;
gap: 10px;
align-items: center;
height: 34px;
top: 135px;
background: #2D4071;
color: #FFFFFF;
img {
  width: 28px;
  height: 28px;
}`;

const List = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 16px;
  align-items: self-start;
  position: relative;
  color: #FFFFFF;
`
const ArrowStyled = styled(Arrow)`
  
`
const Item = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: self-start;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #8C939F;
`

export const SideBar = () => {
  const [sections, setSections] = useState([
    {
      name: "Favorites", isOpen: false, id: 1, data: [
        "Marketing", "Mobile App"
      ]
    },
    {
      name: "My Projects", isOpen: false, id: 2, data: [
        "Marketing", "Mobile App"
      ]
    },
  ])

  const onOpenSection = (id) => {
    setSections(prev => prev.map((s) => id === s.id ? { ...s, isOpen: !s.isOpen } : { ...s }))
  }
  return (
    <Container>
      <StyledLogo />
      <InputSideBar />
      <SideBarMain>
        <WorkSpaceInfo>
          <img placeholder='asd' src={image} />
          My workspace
        </WorkSpaceInfo>
        {sections.map(s =>
          <List onClick={() => onOpenSection(s.id)}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
              <ArrowStyled
                style={{
                  transform: `rotate(${!s.isOpen ? 180 : 0}deg)`
                }} />
              {s.name}
            </div>
            <Item
              style={{ display: `${!s.isOpen ? "none" : "flex"}`, flexDirection: "column" }}
            >
              {s.data.map(i => <p>{i}</p>)}
            </Item>
          </List>
        )}
      </SideBarMain>
    </Container>
  )
};
