import React from "react";
import styled from "styled-components";
const Container = styled.div`
min-height: 58px;

display: flex;
justify-content: center;
align-items: center;
padding: 2px 9px;
gap: 10px;
`;

const TitleText = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #222222;
flex: none;
order: 0;
flex-grow: 0;
`;

const TitleCount = styled.div`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
padding: 14px 15px;
width: 26px;
height: 20px;
background: #E8EBEF;
border-radius: 100px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #8C939F;
`;

export const RowTitile = ({ handler, info = { text: '123123123', count: '23' } }) => {
  return (
    <Container onClick={handler}>
      <TitleText>{info.text}</TitleText>
      <TitleCount>{info.count}</TitleCount>
    </Container>
  )
}
