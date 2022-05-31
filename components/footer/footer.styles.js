import styled from "styled-components"

export const Container = styled.div`
width: 100%;
padding: 4rem auto auto auto;


`;

export const Wrapper = styled.div`
${props => props.colored && `
background: #fff;
color: #000;
border-radius: 10px;
padding: 2rem;
`};
width: 90%;
margin: 3rem auto;
display: grid;
@media (max-width: 640px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
    ${props => props.colored && `
    padding: 1rem;
`};
}
@media (min-width: 640px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
    ${props => props.colored && `

padding: 2rem;
`};
}
@media  (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    
}
`;

export const RightSide = styled.div`
width: 100%;
p{
    font-size: .9rem;
    width: 80%;
    font-weight: 300;
}
`;
export const Logo = styled.h1`
margin-bottom: .7rem;
`;
export const Center = styled.div`
width: 100%;
p{
    width: 90%;
    line-height: 1.8rem;
    font-size: .9rem;
}
`;

export const LeftSide  = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content:center;

 @media ${props => props.theme.devices.mobileXm}{
     padding: 0;
 }
 @media ${props => props.theme.devices.tablet}{
    padding-left: 4rem;
}
span{
    margin: .5rem 0;
}
`
export const FooterContainer = styled.div`
background: #3544a3;
width: 100%;
`;
export const FooterWrapper = styled.div`
width: 90%;
margin: auto;
padding: 4rem 0;
display: grid;
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
export const FooterItem = styled.div`
width: 100%;
p{
    color: #fff;
    font-weight: 300;
    line-height: 2rem;
}
`;
export const Title = styled.h3`
margin-bottom :1rem;
color: #fff;
font-size: 1.5rem;
`;
export const Link = styled.p`
font-weight: 300;
margin: .7rem 0;
color: #fff;
cursor: pointer;
`;