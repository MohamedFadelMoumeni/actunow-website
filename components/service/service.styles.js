import styled from "styled-components";

export const Container = styled.div`
width: 100%;
clip-path: polygon(0 6%, 100% 0, 100% 94%, 0% 100%);
display: flex;
flex-direction: column;
align-items:center;
background: #3544a3;
padding: 5rem 0;
color: #fff;
`;
export const Title = styled.h1`
margin-bottom: 2rem;
`;
export const Directory = styled.div`
width: 90%;
margin: auto;
display: grid;
column-gap: 1.5rem;
row-gap: 1.5rem;
@media (max-width: 640px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
}
@media (min-width: 640px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media  (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    
}
`;