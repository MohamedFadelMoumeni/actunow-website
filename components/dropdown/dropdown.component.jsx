import React, { useState } from "react";
import styled from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const DropDown = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Title>
        <a>Nos Services</a>
        {open ? <BsChevronUp /> : <BsChevronDown />}
      </Title>
      {open && (
        <Drop onMouseEnter={() => setOpen(true)}>
          <ServiceItem>CRÉATION GRAPHIQUE</ServiceItem>
          <ServiceItem>APPLICATIONS MOBILE</ServiceItem>
          <ServiceItem>CONSEIL ET STRATÉGIE</ServiceItem>
          <ServiceItem>WEBMARKETING</ServiceItem>
          <ServiceItem>DÉVELOPPEMENT WEB & MULTIMEDIA</ServiceItem>
        </Drop>
      )}
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
  }

  &:hover {
    color: gray;
  }
`;
export const Drop = styled.div`
  background: #fff;
  border-radius: 10px;
  color: #000;
  position: absolute;
  bottom: -320px;
  right: 50%;
  transform: translateX(50%);
  padding: 1rem;
  box-shadow: 0px 0px 27px -3px rgba(0, 0, 0, 0.1);
  z-index: 300;
  width: 200px;
`;
const ServiceItem = styled.p`
  font-size: 0.8rem;
  text-align: center;
  padding: 1rem 0;
  cursor: pointer;
`;
