import {
  Container,
  Wrapper,
  Close,
  List,
  NavItem,
} from "./navigation-mobile.styles";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const NavigationMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <HiMenuAlt3
        color="black"
        size="30px"
        cursor="pointer"
        onClick={() => setOpen(true)}
      />
      <Wrapper open={open}>
        <Close>
          <IoMdClose
            color="black"
            size="20px"
            cursor="pointer"
            onClick={() => setOpen(false)}
          />
        </Close>
        <List>
          <NavItem>Hello</NavItem>
          <NavItem>Hello</NavItem>
          <NavItem>Hello</NavItem>
          <NavItem>Hello</NavItem>
        </List>
      </Wrapper>
    </Container>
  );
};

export default NavigationMobile;
