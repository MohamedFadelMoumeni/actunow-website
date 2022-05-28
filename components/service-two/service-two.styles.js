import styled from "styled-components"

export const Container = styled.div`
width: 90%;
padding: 1rem;
margin: 2rem auto;
display: flex;
flex-direction: row;
align-items:center;
`;
export const ImageContainer = styled.div`
width: 45%;
align-self:stretch;
position: relative;
`;
export const Content = styled.div`
flex:1;
align-self:stretch;
display: flex;
flex-direction: column;

justify-content:center;
padding-left: 1rem;
`;
export const SeoGrowth  = styled.div`
background: white;
width: auto;
height: auto;
position: absolute;
padding: 1rem;
right: 20px;
top: 50%;
border-radius: 20px;
box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.1);


`;
export const Title = styled.h1`
font-size: 2.3rem;
margin-bottom: 2rem;
`;
export const Description  = styled.p`
font-size: 1.1rem;
line-height: 2rem;
`;
export const LearnMore = styled.button`
padding: .8rem 2rem;
color: #fff;
background: #3544a3;
border: 0;
outline: 0;
font-family: 'Poppins', sans-serif;
font-size: .9rem;
letter-spacing: .12rem;
cursor: pointer;
display: flex;
flex-direction: row;
align-items:center;
align-self:flex-start;
margin-top: 1.3rem;

`;