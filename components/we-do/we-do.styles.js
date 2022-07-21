import styled from "styled-components";
export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  padding: 4rem 0;
`;
export const SectionTitle = styled.h1`
  margin-bottom: 3rem;
  text-align: center;
  font-size: 2rem;
`;
export const Container = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
export const Card = styled.div`
  padding: 1rem 0.3rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;
export const Content = styled.div`
  align-self: stretch;
  margin-left: 1.4rem;
  width: 70%;
`;
export const Rotate = styled.div`
  width: 3.4rem;
  height: 3.4rem;
  background: #ce2828;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
export const Title = styled.h3`
  margin-bottom: 0.7rem;
`;
export const Description = styled.p`
  font-weight: 300;
`;
