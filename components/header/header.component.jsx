import {Container, Logo} from "./header.styles"
import Navigation from "../navigation/navigation.component"
import GetInTouch from "../get-touch/get-touch.component"

const Header = () => {
    return (
        <Container>
            <Logo>Logo</Logo>
            <Navigation />
            <GetInTouch />
        </Container>
    )
}

export default Header