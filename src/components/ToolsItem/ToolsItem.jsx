import React from "react";
import styled, { css } from "styled-components";
import { Container, Text } from "./styled";

export const ToolsItem = ({ handler, icon, active, children }) => {
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
    <Container active={active} onClick={handler}>
      <StyledLogo
        primaryColor={active ? "#0094FF" : "#61DAFB"} secondaryColor="violet" />
      <Text>{children}</Text>
    </Container>
  );
}
