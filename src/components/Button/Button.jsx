/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import plus from "../../assets/icons/plus.png";
import { CustomButton } from "./styled";

export const Button = ({ handler, children, type = "default" }) => {
  return (
    <CustomButton onClick={handler}>
        <>
        <img src={plus} />
        {children}
        </>
    </CustomButton>
  )
}
