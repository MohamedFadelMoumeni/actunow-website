import styled from "styled-components"
import {FaFacebookSquare, FaInstagram, FaTwitter} from "react-icons/fa"

const Social = () => {
    return (
        <Container>
            <FaFacebookSquare style={{marginBottom: ".7rem"}}  size="25px"color="white"/>
            <FaInstagram style={{marginBottom: ".7rem"}}  size="25px"color="white"/>
            <FaTwitter style={{marginBottom: ".7rem"}}  size="25px"color="white"/>

        </Container>

    )
}
export default Social;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items:center;
position: absolute;
bottom: 5rem;
&::after{
    content: "";
    position: absolute;
    bottom: -7rem;
    right: 50%;
    width: 1px;
    height: 100%;
    background: #fff;
}
`;