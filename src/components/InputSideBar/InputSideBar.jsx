
import React, { useState } from "react";
import { Container, Glass, InputCustom } from "./styled";

export const InputSideBar = ({ handler }) => {
  const [value, setValue] = useState('');

  const onChangeInput = (e) => {
    setValue(e.target.value)
    handler(e.target.value)
  }

  return (
    <Container>
      <InputCustom placeholder="Search..." value={value} onChange={onChangeInput} />
      <Glass/>
    </Container>
  )
};
