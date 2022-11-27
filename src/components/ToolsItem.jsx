import React from "react";
import styled, { css } from "styled-components";

export const ToolsItem = ({ handler, icon, active, children }) => {

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    width: 138px; 
    height: 50px;
    border-radius: 0px 8px 8px 0px;
    // padding: 16px;
    flex: none;
    order: 1;
    flex-grow: 0;
    border: 5px solid transparent;
    transition: 0.2s;
    padding-left:10px;
    // margin-top: 10px;
    cursor: pointer;
    &:hover {
      background: #fff;
    }
    ${() => active && css`
      border-left-color: #0094FF;
      color: #0094FF;
      background: #FFFFFF;
    `}
  `
  const StyledLogo = styled(icon)`
  height: 28px;
  width: 28px;
  display: inline-block;
  
  ${() => active && css`
  path {
    fill: #0094FF;
  }
`}`;
  return (
    <Container onClick={handler}>
      <StyledLogo
        primaryColor={active ? "#0094FF" : "#61DAFB"} secondaryColor="violet" />
      <div>{children}</div>
    </Container>
  );
}

