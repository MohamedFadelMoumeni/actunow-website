import {
  Container,
  ImageContainer,
  Content,
  SeoGrowth,
  Title,
  Description,
  LearnMore,
} from "./service-two.styles";
import Image from "next/image";

const ServiceTwo = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="/assets/seo-next.webp" width="350" height="500" />
        <SeoGrowth>
          <Image src="/assets/seo-growth.webp" width="320" height="200" />
        </SeoGrowth>
      </ImageContainer>
      <Content>
        <Title>Qui sommes nous</Title>
        <Description>
          ACTUNOW et une agence de marketing digital basée à Oujda son objectif
          et de vous aider à développer votre projet. Le Web Merketing est notre
          passion, et nous sommes passionnés d{"'"}aider les entreprises à
          atteindre leurs objectifs. Ainsi, lorsque vous choisissez ACTUNOW
          comme agence de marketing digital, vous obtiendrez un plan
          personnalisé qui correspond à votre entreprise, à vos besoins et à vos
          objectifs. Notre philosophie est simple, nous avons des partenaires,
          pas des clients. Votre succès est le nôtre.
        </Description>
        <LearnMore>Savoir plus</LearnMore>
      </Content>
    </Container>
  );
};
export default ServiceTwo;
