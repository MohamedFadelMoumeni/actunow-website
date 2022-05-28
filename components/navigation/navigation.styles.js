import styled from "styled-components"

export const Container = styled.ul`
flex: 1;
flex-direction: row;
align-items:center;
justify-content:center;
color: #fff;
@media ${props => props.theme.devices.mobileXm}{
display: none;
}
@media ${props => props.theme.devices.tablet}{
    display: flex;
    }
`;