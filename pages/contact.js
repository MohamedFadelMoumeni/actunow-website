import styled from "styled-components";
import Header from "../components/header/header.component"
import Footer from "../components/footer/footer.component"
import Image from "next/image";

const Contact = () => {
    return (
       <Container>
           <Wrapper>
       <Header />
       <Title>Get in touch !</Title>
       <Subtitle>
       We'd love to hear from you. Fill in the form and we'll get back to you shortly.
       </Subtitle>
       <FormContainer >
           <InputGroup>
           <label>Name:</label>
           <Input placeholder="John Doe" type="text"/>
               </InputGroup>
               <InputGroup>
           <label>Email:</label>
           <Input placeholder="jogn@email.com" type="text"/>
               </InputGroup>
               <InputGroup>
           <label>Phone:</label>
           <Input placeholder="2126000000" type="text"/>
               </InputGroup>
               <InputGroup>
           <label>Message:</label>
           <Textarea placeholder="Message"/>
               </InputGroup>
               <Submit>Send</Submit>
       </FormContainer>
       </Wrapper>
       <Footer colored/>
       </Container>
    )
}
export default Contact;

const Container = styled.div`
width: 100%;
color: #fff;
background: #3544a3;
position: relative;
#contact{
    position: absolute;
    top: 10%;
    right: 20px;
    img{
        transform: rotate(20deg);
    }
}
`;
export const Wrapper = styled.div`
width: 90%;
margin: auto;
`;
export const Title = styled.h1`
text-align:center;
font-size: 3rem;
font-weight: 600;
margin-top: 4rem;
position: relative;
width: auto;
&::after{
    content: "";
    width: 30px;
    height: 10px;
    background: white;
    position: absolute;
    bottom: -10px;
    right: 50%;
}
`;
export const Subtitle = styled.p`
margin: 1.4rem auto;
width: 70%;
text-align:center;
`;
export const FormContainer = styled.div`
margin: 3rem auto auto auto;
background: #fff;
border-radius: 20px;
padding: 2rem;
color: #000;
@media ${props => props.theme.devices.mobileXm}{
    width: 100%;
}
@media ${props => props.theme.devices.tablet}{
    width: 70%;
}
`;
export const InputGroup = styled.div`
width: 100%;
margin-bottom: 1.1rem;
label{
    font-weight: 400;
    font-size: .95rem;
}

`;
export const Input = styled.input`
width: 100%;
padding: .8rem;
font-size: 1.1rem;
color: #000;
margin-top: .6rem;
outline: 0;
border-radius: 15px;
border: 1px solid lightgray;
&::placeholder{
    color: lightgray;
}
`;
export const Textarea = styled.textarea`
width: 100%;
resize: vertical;
height: 100px;
padding: .8rem;
font-size: 1.1rem;
color: #000;
margin-top: .6rem;
outline: 0;
border-radius: 15px;
border: 1px solid lightgray;
&::placeholder{
    color: lightgray;
}
`;
const Submit = styled.button`
padding: .9rem 4rem;
background: #3544a3;
color: #fff;
border: 0;
font-family: 'Poppins', sans-serif;
font-size: 1rem;
border-radius: 10px;
cursor: pointer;
`;