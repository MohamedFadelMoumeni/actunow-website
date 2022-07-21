import { Container, Content, Title } from "./card-service.styles";
import Image from "next/image";

const CardService = ({ title, description, all, img }) => {
  return (
    <Container
      all={all}
      style={{
        backgroundImage: ` url(${img})`,
      }}
    >
      <Title>{title}</Title>
      <p style={{ width: "80%" }}>{description}</p>
    </Container>
  );
};

export default CardService;
