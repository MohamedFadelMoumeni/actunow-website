import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items:center;
background: #3544a3;
color: #fff;
`;
export const Title = styled.h1`
`;
export const Subtitle = styled.p`
color: #fff;
width: 100%;
line-height: 2.2rem;
margin-top: 1.6rem;
`;
export const Content = styled.div`
width: 40%;
align-self:stretch;
padding: 5rem 1rem;

`;
export const Directory = styled.div`
flex: 1;
background: red;
margin: auto;
display: grid;
@media (max-width: 640px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
}
@media (min-width: 640px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media  (min-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    
}
`;