import styled from "styled-components";

export const Container = styled.div`
widt: 100%;
margin: 4rem 0;
`;
export const Title = styled.h1`
margin-bottom: 2.4rem;
text-align:center;
font-size: 2rem;
`;
export const Parteners = styled.div`
height: 100%;
position: relative;
overflow-x: hidden;
display: flex;
flex-direction: row;
align-items:center;
justify-content:center;
cursor: pointer;
img{
    padding: 1.5rem !important;
}
@media (max-width: 800px){
   ${props => !props.row && ` flex-direction: column;`}
}
`;