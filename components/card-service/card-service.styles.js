import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
text-align:center;
color: #fff;
cursor: pointer;
height: 350px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
${ props => props.all && 'grid-column: 1 / span 2'};
`;
export const Content = styled.div`
width: 100%;
p{
    font-weight: 300;
    line-height: 1.7rem;
}
`;
export const Title = styled.h1`
margin-bottom: 1.6rem;
font-size: 1.6rem;
`;