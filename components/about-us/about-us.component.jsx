import { Container, Content } from "./about-us.styles";
import Image from "next/image";

const Aboutus = () => {
  return (
    <Container>
      <Image src="/assets/teams.png" width="400" height="300" />
      <Content>
        <h2>Dream Team.</h2>
        <p>
          Notre équipe est composée de spécialistes du marketing, de
          concepteurs, de designers et de développeurs experts et qualifiés, et
          nous savons ce qu'il faut pour obtenir de vrais résultats en ligne.
          Nous gardons également l'accent sur les mesures qui comptent le plus.
          Nous savons que l'atteinte de ces objectifs est ce qui fait avancer
          les entreprises, et nous croyons que le succès de nos clients est la
          meilleure mesure de notre propre performance.
        </p>
      </Content>
    </Container>
  );
};
export default Aboutus;
