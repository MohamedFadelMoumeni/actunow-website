import {Container, Content} from "./about-us.styles";
import Image from "next/image";

const Aboutus = () => {
    return <Container >
        <Image src="/assets/teams.png" width="400" height="300"/>
        <Content>
           <h2>Dream Team.</h2>
           <p>
           Équipe jeune, dédiée, et passionnée qui met son expertise à votre service! Et si vous aimeriez profiter de notre expertise en matière de Marketing Digital ? Nos spécialistes sont disponibles en tout temps pour vous aiguiller dans votre prochaine campagne publicitaire.
           </p>
        </Content>

    </Container>
}
export default Aboutus