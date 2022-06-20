import {Container, Logo} from "./header.styles"
import Navigation from "../navigation/navigation.component"
import GetInTouch from "../get-touch/get-touch.component"
import NavigationMobile from "../navigation-mobile/navigation-mobile.component"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <Container>
            <Logo>
               <Link href="/">
               <Image src="/assets/logo.png" width="80" height="80" style={{cursor:"pointer"}}/>
               </Link>
            </Logo>
            <Navigation />
            <GetInTouch />
            <NavigationMobile />
        </Container>
    )
}

export default Header