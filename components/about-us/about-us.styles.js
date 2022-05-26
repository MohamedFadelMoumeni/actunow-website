import styled from "styled-components";

export const Container = styled.div`
width: 90%;
height: 300px;
margin: 4rem auto;
display: flex;
flex-direction: row;
align-items:center;
justify-content:space-between;
`;

export const Content = styled.div`
flex: 1;
height: 100%;
padding: 1rem;
margin-left: 1rem;
h2{
    margin-bottom: 1rem;
    font-size: 2rem;
}
p{
    width: 100%;
    font-weight: 300;
    line-height: 2rem;
    font-size: 1.1rem;
}

`;