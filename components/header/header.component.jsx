import { Container, Logo, Wrapper } from "./header.styles";
import Navigation from "../navigation/navigation.component";
import GetInTouch from "../get-touch/get-touch.component";
import NavigationMobile from "../navigation-mobile/navigation-mobile.component";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link href="/">
            <Image
              src="/assets/logo.webp"
              width="200"
              height="45"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </Logo>
        <Navigation />
        <GetInTouch />
        <NavigationMobile />
      </Wrapper>
    </Container>
  );
};

export default Header;
