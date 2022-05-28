import { Container, Title, Description, CardServiceTwo, Directory, TitleCard, DescriptionCard } from "./Stats.styles";
import Image from "next/image"
import {RiComputerLine} from "react-icons/ri"
const Stats = () => {
    return (
        <Container >
            <Title>Un processus fiable
</Title>
<Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatibus repudiandae consequatur fugiat quae accusamus.</Description>
<Directory>
    <CardServiceTwo >
        <RiComputerLine size="130px" />
        <TitleCard>Lorem ipsum dolor sit.</TitleCard>
        <DescriptionCard>
        Nous favorisons la création de valeurs et le déploiement de nouveaux modèles opérationnels adaptés à chaque département de votre entreprise.
        </DescriptionCard>
    </CardServiceTwo>
    <CardServiceTwo >
    <RiComputerLine size="130px" />
        <TitleCard>Lorem ipsum dolor sit.</TitleCard>
        <DescriptionCard>
        Nous favorisons la création de valeurs et le déploiement de nouveaux modèles opérationnels adaptés à chaque département de votre entreprise.
        </DescriptionCard>
    </CardServiceTwo>
    <CardServiceTwo >
    <RiComputerLine size="130px" />
        <TitleCard>Lorem ipsum dolor sit.</TitleCard>
        <DescriptionCard>
        Nous favorisons la création de valeurs et le déploiement de nouveaux modèles opérationnels adaptés à chaque département de votre entreprise.
        </DescriptionCard>
    </CardServiceTwo>
</Directory>
        </Container>
    )
}

export default Stats