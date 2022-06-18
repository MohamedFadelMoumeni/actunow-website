import styled from "styled-components"
import { useState } from "react";
import {BsPlus} from "react-icons/bs"
import {AiOutlineMinus} from "react-icons/ai"

const ProposCard = ({children, title}) => {
    const [open, setOpen] = useState(false)
    return(
    <Container onClick={() => setOpen(!open)}>
        <Header>
            <p>{title}</p>
            {
                !open ? <BsPlus size="30px" color="black"/> : <AiOutlineMinus size="30px" color="black"/>
            }
        </Header>
        {
            open && (
                <Text>
                    {children}
                </Text>
            )
        }
    </Container>

)}

export default ProposCard;

const Container = styled.div`
margin: 1rem auto;
border-radius: 2rem;
padding: .5rem 1rem;
box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.1);
cursor: pointer;
@media ${props => props.theme.devices.mobileXm}{
    width: 90%;
}
@media ${props => props.theme.devices.tablet}{
    width: 70%;
}

`;

 const Header = styled.div`
 width: 100%;
 display: flex;
 align-items:center;
 justify-content:space-between;

`;
export const Text = styled.p`
width: 97%;
margin: 1rem auto;
`;