import styled from "styled-components"

export const Container = styled.div`
@media ${props => props.theme.devices.mobileXm}{
    display: flex;

}
@media ${props => props.theme.devices.tablet}{
    display: none;
    
}
`;
export const Wrapper = styled.div`
position: fixed;
top: 0;
right:0;
left: 0;
bottom:0;
background: white;
z-index: 4;
display: ${props => props.open ? 'flex' : 'none'};
flex-direction: column;
align-items:center;

`;
export const Close = styled.div`
width: 100%;
padding: .6rem;
display: flex;
flex-direction: row;
align-items:center;
justify-content:flex-end;
`;

export const List = styled.div`
width: 100%;
flex: 1;
display: flex;
flex-direction: column;
align-items:center;

`;
export const NavItem  = styled.p`
margin: 1rem auto;
color: #000;
font-size: 1.5rem;
`;