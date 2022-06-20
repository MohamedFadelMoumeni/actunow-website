import styled from "styled-components"
export const Container = styled.div`
width: 100%;
background-position: center;
background-size: cover;
@media  ${props => props.theme.devices.mobileXm}{
    height: auto;
    padding-bottom: 3rem;
}
@media  ${props => props.theme.devices.tablet}{
    height: 50rem;
    padding-bottom: 0;
}
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

text-align:center;
color: #fff;
@media  ${props => props.theme.devices.mobileXm}{
    font-size: 2.2rem;
    width: 90%;
}
@media  ${props => props.theme.devices.mobileM}{
    font-size: 2.5rem;
    width: 80%;
}
@media  ${props => props.theme.devices.laptopL}{
    font-size: 4rem;
}
`;
export const Paragraph = styled.p`
text-align:center;
margin-top: 1rem;
width: 80%;
color: #fff;
font-size: 1.2rem;
`;
export const Content = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;

`;