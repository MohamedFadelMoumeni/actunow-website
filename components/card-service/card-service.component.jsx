import {Container, Content, Title} from "./card-service.styles"
import Image from "next/image"

const CardService = () => {
    return <Container >
        <Image src="/assets/service-1.jpg" width="100" height="250"/>
        <Content>
            <Title>Lorem, ipsum dolor.</Title>
            <p>
            Lorem ipsum dolor sit amet, et postulant intellegebat pri. Mel velit scriptorem cu, eu dicam volutpat 

            </p>
        </Content>
    </Container>
}

export default CardService