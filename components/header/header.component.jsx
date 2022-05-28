import {Container, Logo} from "./header.styles"
import Navigation from "../navigation/navigation.component"
import GetInTouch from "../get-touch/get-touch.component"
import NavigationMobile from "../navigation-mobile/navigation-mobile.component"

const Header = () => {
    return (
        <Container>
            <Logo>Logo</Logo>
            <Navigation />
            <GetInTouch />
            <NavigationMobile />
        </Container>
    )
}

export default Header