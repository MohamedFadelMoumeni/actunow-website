import { Container, Title, Directory } from "./service.styles";
import CardService from "../card-service/card-service.component";

const Service = () => {
    return <Container >
        <Title>Our Service</Title>
        <Directory>
            <CardService />
            <CardService />
            <CardService />
 

        </Directory>
    </Container>
}

export default Service;