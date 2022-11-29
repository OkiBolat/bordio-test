import styled from "styled-components";

export const CustomButton = styled.button`
cursor: pointer;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 14px 8px 20px;
gap: 8px;
width: 114px;
height: 40px;
background: #0094FF;
color: white;
border-radius: 50px;
flex: none;
order: 1;
flex-grow: 0;
border: none;
transition: 0.3s;
&:hover {
  background: rgb(0, 118, 204);
transform: scale(1.02)
}
`;
