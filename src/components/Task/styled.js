import styled, { css } from "styled-components";


  export const TaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 15px;
    gap: 10px;
    background: ${(props) => props.color};
    max-height: 84px;
    height: 100%;
    border-radius: 8px;
    margin-top: 10px;
   
  ${(props) => props.title === 'Completed' && css`
  background: #F0F0F0;
  color: #A5A5A5;
  text-decoration: line-through;
`}
  `