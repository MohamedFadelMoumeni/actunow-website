import { Container } from "./navigation.styles";
import NavItem from "../nav-item/nav-item.component";
import Dropdown from "../dropdown/dropdown.component";
const Navigation = () => {
  return (
    <Container>
      <NavItem title="Acceuil" />
      <Dropdown />
      <NavItem title="Qui sommes nous ?" />
      <NavItem title="Blog" />
    </Container>
  );
};

export default Navigation;
