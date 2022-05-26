import {Container, Content} from "./about-us.styles";
import Image from "next/image";

const Aboutus = () => {
    return <Container >
        <Image src="/assets/marketing.png" width="400" height="300"/>
        <Content>
           <h2>Fully dedicated to finding the best solutions.</h2>
           <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus molestias magnam est architecto voluptates doloremque eos, aliquam in non, quia voluptatum qui, dignissimos similique expedita! Commodi, nihil. Fugit asperiores voluptatum illo quas optio veritatis nam natus unde at. Laborum obcaecati deserunt expedita similique doloribus soluta sunt asperiores debitis aliquam!
           </p>
        </Content>

    </Container>
}
export default Aboutus