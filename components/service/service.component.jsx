import { Container, Title, Directory, Subtitle, Content } from "./service.styles";
import CardService from "../card-service/card-service.component";

const Service = () => {
    return <Container >
        <Content>
        <Title>Our Service</Title>
        <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ea voluptatum odit sint sapiente. Adipisci doloremque perspiciatis cumque recusandae sint eum error ad sit, maxime tempore consectetur suscipit ipsam fuga porro dicta voluptate qui accusantium quae totam cupiditate omnis tenetur beatae. Placeat fuga, ex nesciunt consequuntur dolore nihil repudiandae enim.
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