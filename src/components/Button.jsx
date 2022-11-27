/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled, { css } from "styled-components";
import plus from "../assets/icons/plus.png"
export const Button = ({ handler, children, type = "default" }) => {
  const CustomButton = styled.button`
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

${() => type === 'add' && css`
  background: #0094FF;
  color: white;
`}
`;
  return (
    <CustomButton onClick={handler}>
        <>
        <img src={plus} />
        {children}
        </>
    </CustomButton>
  )
}
