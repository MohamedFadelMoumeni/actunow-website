import React, { useState } from "react";
import styled from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const DropDown = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Title>
        <a
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((prev) => !prev)}
        >
          Nos Services
        </a>
        {open ? <BsChevronUp /> : <BsChevronDown />}
      </Title>

      <Drop open={open}>
        <ServiceItem>CRÉATION GRAPHIQUE</ServiceItem>
        <ServiceItem>APPLICATIONS MOBILE</ServiceItem>
        <ServiceItem>CONSEIL ET STRATÉGIE</ServiceItem>
        <ServiceItem>WEBMARKETING</ServiceItem>
        <ServiceItem>DÉVELOPPEMENT WEB & MULTIMEDIA</ServiceItem>
      </Drop>
    </Container>
  );
};

export default DropDown;

const Container = styled.div`
  position: relative;
  cursor: pointer;
`;
export const Title = styled.li`
  margin-right: 2.5rem;
  display: flex;
  align-items: center;
  color: #000;
  a {
    margin-right: 0.4rem;
    color: #000;
    background: transparent;
    border: 0;
  }

  &:hover {
    color: gray;
  }
`;
export const Drop = styled.div`
  position: absolute;
  right: 0;
  left: auto;
  box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),
    0 4px 6px -2px rgba(71, 63, 79, 0.16);
  font-size: 0.875rem;
  z-index: 9999;
  min-width: 200px;
  padding: 0.5rem 0;
  list-style: none;
  background-color: #fff;
  border-radius: 0.5rem;
  ${(props) => !props.open && "display: none"};
`;
const ServiceItem = styled.p`
  font-size: 0.8rem;
  text-align: center;
  padding: 1rem 0;
  cursor: pointer;
`;
