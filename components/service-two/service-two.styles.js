import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.devices.mobileXm} {
    flex-direction: column;
    padding: 0;
  }
  @media ${(props) => props.theme.devices.tablet} {
    flex-direction: row;
    padding: 1rem;
  }
`;

export const ImageContainer = styled.div`
  align-self: stretch;
  position: relative;
  @media ${(props) => props.theme.devices.mobileXm} {
    width: 100%;
  }
  @media ${(props) => props.theme.devices.tablet} {
    width: 45%;
  }
`;
export const Content = styled.div`
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${(props) => props.theme.devices.mobileXm} {
    padding: 0;
  }
  @media ${(props) => props.theme.devices.tablet} {
    padding-left: 1rem;
  }
`;
export const SeoGrowth = styled.div`
  background: white;
  width: auto;
  height: auto;
  position: absolute;
  padding: 1rem;
  right: 20px;
  top: 50%;
  border-radius: 20px;
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.1);
`;
export const Title = styled.h1`
  font-size: 2.3rem;
  margin-bottom: 2rem;
`;
export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 2rem;
`;
export const LearnMore = styled.button`
  padding: 0.8rem 2rem;
  color: #fff;
  background: #2d4059;
  border: 0;
  outline: 0;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.12rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-top: 1.3rem;
`;
