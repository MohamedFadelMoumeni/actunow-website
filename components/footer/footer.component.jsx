import {Container, RightSide, Logo, Center, LeftSide, Wrapper,Link,  FooterContainer, FooterWrapper,Title, FooterItem} from "./footer.styles"
import Image from "next/image"
const Footer = ({colored}) => {
    return (
        <Container>
            <Wrapper colored>
            <RightSide >
                <Logo>
                <Image src="/assets/logo.png" width="80" height="80"/>
                </Logo>
                <p>
                L’agence qui vous simplifie le Web
                </p>
            </RightSide>
            <Center>
                <p>
                ACTUNOW, est une agence de branding et de marketing digital B2B qui vient pour vous faire devenir les leaders dans votre domaine. 
                </p>
            </Center>
            <LeftSide>
            <span>Phone: +212 6 53 65 92 38</span>
            <span>Email: hi@swipinv.com</span>
            <span>Support: support@swipinv.com</span>
            </LeftSide>
            </Wrapper>
            <FooterContainer >
                <FooterWrapper>
                    <FooterItem>
                        <Title>Lien utils</Title>
                        <Link>Lien1</Link>
                        <Link>Lien1</Link>
                        <Link>Lien1</Link>
                        <Link>Lien1</Link>
                    </FooterItem>
                    <FooterItem>
                        <Title>SERVICES</Title>
                        <Link>Lien1</Link>
                        <Link>Lien1</Link>
                        <Link>Lien1</Link>
                        <Link>Lien1</Link>
                    </FooterItem>
                    <FooterItem>
                        <Title>Addresses contact</Title>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero saepe eum nesciunt explicabo maxime. Libero sunt assumenda dolore at reprehenderit!
                        </p>
                    </FooterItem>
                </FooterWrapper>
                
            </FooterContainer>
        </Container>

    )
}

export default Footer