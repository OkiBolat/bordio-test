/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import { useOutsideClick } from "../../utils/helpers";
import { ArrowStyled, DropDownStyled, List, ListItem } from "./styled";

export const DropDownSelect = ({ data, handler}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(data[0]);

  const onCloseSelect = () => {
    setIsOpen(false);
  };
  const onSelectOption = (option) => {
    setSelectedValue(option)
    handler(option)
  }


  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, onCloseSelect);

  return (
    <DropDownStyled ref={wrapperRef} onClick={() => setIsOpen(!isOpen)}>
      {selectedValue.label}
      <ArrowStyled open={isOpen} fill="black" />
      {isOpen &&
        <List>
          {data.map(s => <ListItem isActive={s.id === selectedValue.id} onClick={() => onSelectOption(s)} key={s.value}>{s.label}</ListItem>)}
        </List>}
    </DropDownStyled>
  )
};
