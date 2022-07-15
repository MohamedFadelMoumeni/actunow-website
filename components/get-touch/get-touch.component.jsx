import { Container } from "./get-touch.styles";
import { GrContact } from "react-icons/gr";
import { MdMessage } from "react-icons/md";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <Link href="/contact">
      <Container>
        <MdMessage style={{ marginRight: "1rem" }} size="25px" />
        <p>Contactez-nous</p>
      </Container>
    </Link>
  );
};

export default GetInTouch;
