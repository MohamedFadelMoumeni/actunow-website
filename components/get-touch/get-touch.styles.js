import styled from "styled-components"

export const Container = styled.button`
padding: .8rem 2rem;
color: #fff;
background: #3544a3;
border: 0;
outline: 0;
font-family: 'Poppins', sans-serif;
font-size: .9rem;
cursor: pointer;
flex-direction: row;
align-items:center;
@media ${props => props.theme.devices.mobileXm}{
    display: none;
    }
    @media ${props => props.theme.devices.tablet}{
        display: flex;
        }
`;