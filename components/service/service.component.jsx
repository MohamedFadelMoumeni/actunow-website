import { Container, Title, Directory, Subtitle, Content } from "./service.styles";
import CardService from "../card-service/card-service.component";

const Service = () => {
    return <Container >
        <Content>
        <Title>Expertise</Title>
        <Subtitle>
        Vous aimeriez profiter de notre expertise en matière de Marketing Digital ? Nos spécialistes sont disponibles en tout temps pour vous aiguiller dans votre prochaine campagne publicitaire.

        </Subtitle>
        </Content>
        <Directory>
            <CardService />
            <CardService />
            <CardService />
            <CardService />
 

        </Directory>
    </Container>
}

export default Service;