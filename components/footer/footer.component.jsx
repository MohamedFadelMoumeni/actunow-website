import {Container, RightSide, Logo, Center, LeftSide, Wrapper,Link,  FooterContainer, FooterWrapper,Title, FooterItem} from "./footer.styles"

const Footer = () => {
    return (
        <Container>
            <Wrapper>
            <RightSide >
                <Logo>Logo</Logo>
                <p>
                SWIPINV, LET´S SWIPE YOUR BUSINESS IN VICTORY

                </p>
            </RightSide>
            <Center>
                <p>
                SwipInv est une agence de marketing digital et de publicité marocaine située à Oujda aux activités variées. SwipInv vous propose un accompagnement en marketing digital. Afin de répondre aux besoins de nos clients

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