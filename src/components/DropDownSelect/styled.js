import styled, { css } from "styled-components";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-b.svg";

export const DropDownStyled = styled.button`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px 8px 20px;
  gap: 8px;
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
export const ArrowStyled = styled(Arrow)`
    ${(props) => props.open && css`
    transform: rotate(180deg);
    `}
`
export const List = styled.div`
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
export const ListItem = styled.div`
    margin-top: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    gap: 4px;
    width: 120px;
    height: 40px;
    background: #ffffff;
    border-radius: 4px;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    &:hover {
    background: #F5F8FA;
      }
    ${(props) => props.isActive && css`
      background: #F5F8FA;
    `}
`