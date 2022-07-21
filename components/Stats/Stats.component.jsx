import {
  Container,
  Title,
  Description,
  CardServiceTwo,
  Directory,
  TitleCard,
  DescriptionCard,
} from "./Stats.styles";
import Image from "next/image";
import { RiComputerLine } from "react-icons/ri";
import { BiAnalyse, BiFastForward } from "react-icons/bi";
const Stats = () => {
  return (
    <Container>
      <Title>Un processus fiable</Title>
      <Description>
        Notre agence de marketing digital vous accompagne dans le développement
        de votre entreprise grâce à l{"'"}ensemble de nos experts digitaux ainsi
        que des outils du marketing digital pour améliorer votre acquisition et
        votre conversion.
      </Description>
      <Directory>
        <CardServiceTwo>
          <RiComputerLine size="90px" />
          <TitleCard>SOLUTIONS ADAPTÉES</TitleCard>
          <DescriptionCard>
            Nous favorisons la création de valeurs et le déploiement de nouveaux
            modèles opérationnels adaptés à chaque département de votre
            entreprise.
          </DescriptionCard>
        </CardServiceTwo>
        <CardServiceTwo>
          <BiAnalyse size="90px" />
          <TitleCard>ANALYSE DE VOTRE ENTREPRISE</TitleCard>
          <DescriptionCard>
            Notre intention en tant qu{"'"}agence de marketing est de mettre en
            évidence vos forces et faiblesses pour prendre des décisions
            stratégiques plus adaptées. Celui-ci va permettre d{"'"}optimiser la
            gestion des ressources et devenir plus compétitif.
          </DescriptionCard>
        </CardServiceTwo>
        <CardServiceTwo>
          <BiFastForward size="90px" />
          <TitleCard>ACCÉLÉRATION DE VOTRE CROISSANCE</TitleCard>
          <DescriptionCard>
            Notre objectif consiste à permettre à votre entreprise de tirer
            profit de notre expérience approfondie du marketing digital pour le
            déploiement de solutions intelligentes et fiables. Afin d{"'"}
            assurer la croissance de votre entreprise.
          </DescriptionCard>
        </CardServiceTwo>
      </Directory>
    </Container>
  );
};

export default Stats;
