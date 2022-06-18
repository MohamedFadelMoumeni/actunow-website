import { Wrapper , Container, Welcome, Title, Content, Paragraph} from "./Hero.styles";
import Social from "../social/social.component";
import Header from "../header/header.component";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Hero = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return <Container
    style={{
         backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),url(./assets/hero.jpg)'
    }}
    >
        <Wrapper>
            <Header />
        
            <Carousel containerClass="carousel" responsive={responsive}>
               <Content>
               <Title>
               On rendra votre marque beaucoup plus performante grâce à nos solutions technologiques!
               </Title>
            <Paragraph>
            Notre cœur de métier est d’accompagner les entreprises et institutions dans la mise en œuvre d’une stratégie digitale adaptée aux nouveaux médias, afin de créer des solutions numériques innovantes.
            </Paragraph>
               </Content>
               <Content>
               <Title>
               ACTUNOW l’Agence de Marketing qui vous simplifie le Web! 
               </Title>
            <Paragraph>
            Nous sommes une agence de marketing créative accompagnatrice des entreprises nationales et internationales. Avec un positionnement de fierté, on est classé parmi les meilleures agences de publicités au nord-est du Maroc. 
            </Paragraph>
               </Content>
               <Content>
               <Title>
               Équipe jeune, dédiée, et passionnée qui met son expertise à votre service
               </Title>
               </Content>

            </Carousel>
           
            
            <Social />
        </Wrapper>
    </Container>
}

export default Hero