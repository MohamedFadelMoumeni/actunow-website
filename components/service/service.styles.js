import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`;
export const Title = styled.h1``;
export const Subtitle = styled.p`
  width: 100%;
  margin-top: 1.6rem;
  font-size: 1.4rem;
  font-weight: normal;
`;
export const Content = styled.div`
  align-self: stretch;
  padding: 4rem 1rem;
  width: 100%;
  text-align: center;
`;
export const Directory = styled.div`
  flex: 1;
  margin: auto;
  display: grid;
  max-width: 90%;
  gap: 1rem;
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
