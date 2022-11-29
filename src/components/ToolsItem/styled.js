import styled, { css } from "styled-components";

export const Text = styled.div`
font-weight: 400;
font-size: 14px;
line-height: 16px;
`
export const Container = styled.div`
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
    ${(props) => props.active && css`
      border-left-color: #0094FF;
      color: #0094FF;
      background: #FFFFFF;
    `}
  `