import styled from "styled-components"
export const Container = styled.div`
width: 100%;
height: 100vh;
background-position: center;
background-size: cover;
`;

export const Wrapper  = styled.div`
width: 90%;
height: 100%;
margin: auto;
position :relative;
overflow: hidden;


`;
export const Welcome = styled.h3`
color: #fff;
text-align:center;
font-weight: 400;
text-transform: uppercase;
`;
export const Title = styled.h1`
width: 80%;
text-align:center;
color: #fff;

@media  ${props => props.theme.devices.mobileXm}{
    font-size: 2.2rem;
}
@media  ${props => props.theme.devices.mobileM}{
    font-size: 3rem;
}
@media  ${props => props.theme.devices.tablet}{
    font-size: 4rem;
}
`;
export const Content = styled.div`
height: 90%;
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
`;