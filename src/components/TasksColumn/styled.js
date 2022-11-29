import styled from 'styled-components';

export const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
flex: 0 0 auto;
min-width: 300px;
gap:0;
`
export const Title = styled.div`
min-height: 58px;

display: flex;
justify-content: center;
align-items: center;
padding: 2px 9px;
gap: 10px;
`;

export const TitleText = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #222222;
flex: none;
order: 0;
flex-grow: 0;
`;

export const TitleCount = styled.div`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
padding: 14px 15px;
width: 26px;
height: 20px;
background: #E8EBEF;
border-radius: 100px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #8C939F;
`;

export const TaskWrp = styled.div`
// overflow-y: scroll;
min-height: 100vh;
background: #fff;
width: 100%;
border-right: 1px solid #F3F3F3;
padding: 10px;
min-width: 290px;
}`;
export const TaskHeader = styled.div` 
position: sticky;
top: 0;
height: 58px;
display: flex;
justify-content: center;
align-items: center;
border-right: 1px solid #F3F3F3;
border-bottom: 1px solid #F3F3F3;
background: #fff;


`;