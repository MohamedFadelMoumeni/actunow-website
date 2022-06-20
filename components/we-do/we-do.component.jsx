import { Card, Container, Content,SectionTitle, Rotate,Wrapper, Title, Description } from "./we-do.styles";
import {BsCheckLg} from "react-icons/bs";

const WeDo = () => {
    return (
        <Wrapper>
            <SectionTitle>Nos valeurs</SectionTitle>
            <Container >
            <Card >
                <Rotate >
                    <BsCheckLg size="1.5rem"/>
                </Rotate>
                <Content>
                    <Title>Respect.</Title>
                    <Description>
                    Le respect nourrit la bienveillance envers toute personne et toute chose, et ce, quel que soit le moment, l'humeur, le lieu, l'individu ou l'objet. 
                    </Description>
                </Content>
            </Card>
            <Card >
                <Rotate >
                    <BsCheckLg size="1.5rem"/>
                </Rotate>
                <Content>
                    <Title>Travail d’équipe.</Title>
                    <Description>
                    Chaque collaborateur peut se consacrer pleinement à sa mission chez nous. Ce qui permet d’avoir une équipe plus efficiente! 
                    </Description>
                </Content>
            </Card>
            <Card >
                <Rotate >
                    <BsCheckLg size="1.5rem"/>
                </Rotate>
                <Content>
                    <Title>Transparence.</Title>
                    <Description>
                    Une entreprise qui pratique la transparence, obtiendra systématiquement des avantages, et ça nous permet de rester en tête de course.                     </Description>
                </Content>
            </Card>
            <Card >
                <Rotate >
                    <BsCheckLg size="1.5rem"/>
                </Rotate>
                <Content>
                    <Title>Créativité.</Title>
                    <Description>
                    Rassembler des experts en digital nous permet de générer des idées sans pareil.                     </Description>
                </Content>
            </Card>
            <Card >
                <Rotate >
                    <BsCheckLg size="1.5rem"/>
                </Rotate>
                <Content>
                    <Title>Performance .</Title>
                    <Description>
                    Nous somme accrédités comme étant un partenaire digital de Google, et même Blueprint Facebook.                     </Description>
                </Content>
            </Card>
            
        </Container>
        </Wrapper>
    )
}
export default WeDo;