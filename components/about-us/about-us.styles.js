import styled from "styled-components";

export const Container = styled.div`
width: 90%;
margin: 4rem auto;
display: flex;
align-items:center;
justify-content:space-between;
@media ${props => props.theme.devices.mobileXm}{
    flex-direction: column;
    height: auto;
}
@media ${props => props.theme.devices.tablet}{
    flex-direction: row;
    height: 300px;
}
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