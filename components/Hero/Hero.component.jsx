import {
  Wrapper,
  Container,
  Welcome,
  Title,
  Content,
  Paragraph,
} from "./Hero.styles";
import Social from "../social/social.component";
import Header from "../header/header.component";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),url(./assets/background.webp)",
      }}
    >
      <Wrapper>
        <Carousel containerClass="carousel" responsive={responsive}>
          <Content>
            <Title>
              L’agence de Marketing Digitale qui vous accompagne dans votre
              projet.
            </Title>
            <Paragraph>
              Un projet ? Un besoin ? Nous sommes là pour vous accompagner
            </Paragraph>
          </Content>
          <Content>
            <Title>
              Votre marque beaucoup plus connue grâce à nos solutions digitales!
            </Title>
            <Paragraph>
              Notre cœur de métier est d’accompagner les entreprises et les
              institutions à la mise en œuvre d’une stratégie digitale adaptée
              aux nouveaux médias.
            </Paragraph>
          </Content>
          <Content>
            <Title>
              ACTUNOW l’Agence de Marketing qui vous simplifie le Web!
            </Title>
            <Paragraph>
              Nous sommes une agence de marketing créative accompagnatrice des
              entreprises nationales et internationales.
            </Paragraph>
          </Content>
          <Content>
            <Title>
              Donnez vie à vos idées avec notre agence de communication ACTUNOW!
            </Title>
          </Content>
        </Carousel>

        <Social />
      </Wrapper>
    </Container>
  );
};

export default Hero;
