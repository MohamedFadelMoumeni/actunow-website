import { Container, ImageContainer, Content, SeoGrowth, Title, Description, LearnMore} from "./service-two.styles";
import Image from "next/image"

const ServiceTwo = () => {
    return (
        <Container >
            <ImageContainer >
                <Image src="/assets/seo-next.webp" width="350" height="500"/>
                <SeoGrowth>
                <Image src="/assets/seo-growth.webp" width="320" height="200"/>
                </SeoGrowth>
               
            </ImageContainer>
            <Content >
                <Title>
                Next level analytics for control your business

                </Title>
                <Description>
                Build trust to your customers and increase your sales like a pro.
Take your brand to the new height. Get ahead with your target quickly.
And Take your brand to the new height. Get ahead with your target quickly. Build trust to your customers and increase your sales like a pro
                </Description>
                <LearnMore>Learn more</LearnMore>
            </Content>
        </Container>
    )
}
export default ServiceTwo