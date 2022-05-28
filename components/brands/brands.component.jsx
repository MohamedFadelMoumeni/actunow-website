import { Container, Title , Parteners} from "./brands.styles";
import Marquee from "react-fast-marquee";
import Image from "next/image"

const Brands  = () => {
    return (
        <Container>
            <Title>Ils nous font confiance </Title>
         <Marquee pauseOnHover pauseOnClick speed={30}>
             <Parteners row>
         <Image id="partener-img" src="/assets/Google.svg" width={200} height={70} alt="SwipInv Partenaire"/>
      <Image id="partener-img" src="/assets/tesla.svg" width={200} height={70} alt="SwipInv Partenaire"/>
      <Image id="partener-img" src="/assets/IBM.svg" width={200} height={70} alt="SwipInv Partenaire"/>
      <Image id="partener-img" src="/assets/Meta.svg" width={200} height={70} alt="SwipInv Partenaire"/>
      <Image id="partener-img" src="/assets/Peloton.svg" width={200} height={70} alt="SwipInv Partenaire"/>
      <Image id="partener-img" src="/assets/Amazon.svg" width={200} height={70} alt="SwipInv Partenaire"/>
      </Parteners>
         </Marquee>


        </Container>
    )
}

export default Brands;