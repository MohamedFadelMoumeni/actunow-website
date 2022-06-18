import { Container } from "./get-touch.styles";
import {GrContact} from "react-icons/gr"
import {MdMessage} from "react-icons/md"

const GetInTouch  = () => {
    return (
        <Container>
            <MdMessage  style={{marginRight: "1rem"}} size="25px"/>
            <p> Clavarder avec nous, NOW</p>
        </Container>
    )
}

export default GetInTouch