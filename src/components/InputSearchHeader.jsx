
import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";

const InputCustom = styled.input`
        width: 180px;
        height: 40px;
        background: #F5F8FA;
        border-radius: 50px;
        border: none;
        padding: 12px;
        font-size: 14px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #8C939F;
    }
`;

const Container = styled.div`
    position: relative;
`;

const Glass = styled(SearchIcon)`
      position: absolute;
      right: 20px;
      top: 13px;
`;

export const InputSearchHeader = ({ handler }) => {
  const [value, setValue] = useState('');

  const onChangeInput = (e) => {
    setValue(e.target.value)
    // handler(e.target.value)
  }

  return (
    <Container>
      <InputCustom placeholder="Search..." value={value} onChange={onChangeInput} />
      <Glass />
    </Container>
  )
};
