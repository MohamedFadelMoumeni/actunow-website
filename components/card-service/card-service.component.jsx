import {Container, Content, Title} from "./card-service.styles"
import Image from "next/image"

const CardService = ({title, description, all}) => {
    return <Container 
    all={all}
    style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./assets/service-1.jpg)`
    }}
    >
       
       
            <Title>{title}</Title>
            <p>
                {description}
            </p>
       
    </Container>
}

export default CardService