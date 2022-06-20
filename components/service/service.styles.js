import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
align-items:center;
background: #3544a3;
color: #fff;
@media ${props => props.theme.devices.mobileXm}{
    flex-direction: column;
}
@media ${props => props.theme.devices.tablet}{
    flex-direction: row;
}
`;
export const Title = styled.h1`
`;
export const Subtitle = styled.p`
color: #fff;
width: 100%;
margin-top: 1.6rem;
font-size: 1.4rem;
font-weight: normal;
`;
export const Content = styled.div`
align-self:stretch;
padding: 5rem 1rem;
@media ${props => props.theme.devices.mobileXm}{
    width: 100%;
}
@media ${props => props.theme.devices.tablet}{
    width: 40%;
}

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