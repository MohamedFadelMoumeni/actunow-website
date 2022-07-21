import {
  Container,
  Title,
  Directory,
  Subtitle,
  Content,
} from "./service.styles";
import CardService from "../card-service/card-service.component";

const Service = () => {
  return (
    <Container>
      <Content>
        <Title>Expertise</Title>
        {/**
             *         <Subtitle>
          Nos experts sont en veille constante et s’appuient sur les meilleures
          pratiques tendances, et évolutions digitales du moment pour vous
          apporter la modernité et l’excellence.
        </Subtitle>
             */}
      </Content>
      <Directory>
        <CardService
          img="./assets/gr.webp"
          title="CRÉATION GRAPHIQUE"
          description="ACTUNOW offre une gamme complète de services de design pour que les projections des clients se transforment en réalité. "
        />
        <CardService
          img="./assets/app.webp"
          title="APPLICATION MOBILE"
          description="ACTUNOW développe et publie des solutions mobiles natives (IOS, Android) et Hybrides (multiplate-forme) pour smartphones, tablettes, bornes interactives ainsi que toute autre sorte de dispositifs utilitaires."
        />
        <CardService
          img="./assets/conseil.webp"
          title="CONSEIL ET STRATÉGIE"
          description="Attaché à vous fournir du conseil de qualité, et de développer votre business, nous sommes en mesure de vous accompagner sur de nombreux leviers grâce à nos expertises internes sur l’acquisition de trafic."
        />
        <CardService
          img="./assets/marketing.webp"
          title="WEBMARKETING"
          description="Nos experts interviennent sur de nombreux axes digitaux comme l’amélioration en référencement naturel ou référencement payant, le social media et l’inbound marketing."
        />
        <CardService
          img="./assets/web.webp"
          all
          title="DÉVELOPPEMENT WEB & MULTIMEDIA"
          description="Le développement web représentant le cœur métier de l’agence, les experts de notre agence travaillent en étroite collaboration avec vous pour comprendre vos priorités et s’efforcent à vous offrir les solutions de développement les plus optimales, personnalisées et adaptées à vos besoins sur le web."
        />
      </Directory>
    </Container>
  );
};

export default Service;
