import { Wrapper , Container, Welcome, Title, Content} from "./Hero.styles";
import Social from "../social/social.component";
import Header from "../header/header.component";

const Hero = () => {
    return <Container
    style={{
         backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),url(./assets/hero.jpg)'
    }}
    >
        <Wrapper>
            <Header />
            <Content>
            <Welcome>Welcome to our marketing agency.</Welcome>
            <Title>Lorem ipsum dolor sit amet consectetur.</Title>
            </Content>
            <Social />
        </Wrapper>
    </Container>
}

export default Hero