import {Container, Logo} from "./header.styles"
import Navigation from "../navigation/navigation.component"
import GetInTouch from "../get-touch/get-touch.component"
import NavigationMobile from "../navigation-mobile/navigation-mobile.component"
import Image from "next/image"

const Header = () => {
    return (
        <Container>
            <Logo>
                <Image src="/assets/logo.png" width="80" height="80"/>
            </Logo>
            <Navigation />
            <GetInTouch />
            <NavigationMobile />
        </Container>
    )
}

export default Header