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
                    Amcorper uisque ac dolor nec nisl pteqe. Bulum sed ultrices mi morbi dim puru.
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
                    Amcorper uisque ac dolor nec nisl pteqe. Bulum sed ultrices mi morbi dim puru.
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
                    Amcorper uisque ac dolor nec nisl pteqe. Bulum sed ultrices mi morbi dim puru.
                    </Description>
                </Content>
            </Card>
            <Card >
                <Rotate >
                    <BsCheckLg size="1.5rem"/>
                </Rotate>
                <Content>
                    <Title>Créativité.</Title>
                    <Description>
                    Amcorper uisque ac dolor nec nisl pteqe. Bulum sed ultrices mi morbi dim puru.
                    </Description>
                </Content>
            </Card>
            <Card >
                <Rotate >
                    <BsCheckLg size="1.5rem"/>
                </Rotate>
                <Content>
                    <Title>Responsabilité.</Title>
                    <Description>
                    Amcorper uisque ac dolor nec nisl pteqe. Bulum sed ultrices mi morbi dim puru.
                    </Description>
                </Content>
            </Card>
            
        </Container>
        </Wrapper>
    )
}
export default WeDo;