import {Container, Content, Title} from "./card-service.styles"
import Image from "next/image"

const CardService = () => {
    return <Container 
    style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./assets/service-1.jpg)`
    }}
    >
       
       
            <Title>Lorem, ipsum dolor.</Title>
            <p>
            Lorem ipsum dolor sit amet, et postulant intellegebat pri. Mel velit scriptorem cu, eu dicam volutpat 

            </p>
       
    </Container>
}

export default CardService