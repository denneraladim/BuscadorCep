
import styled from "styled-components";

import {FiSearch} from 'react-icons/fi';


export const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: linear-gradient(#121212, #212b46);
`;

export const Title = styled.h1`
font-size: 85px;
color: #fff;

@media(max-width: 620px){
    font-size: 60px;
}
`;

export const ContainerInput = styled.div`
background-color: rgba(255,255,255,0.2);
padding: 15px;
margin: 34px 0;
display: flex;
border-radius: 8px;
box-shadow: 1px 3px 8px rgba(0,0,0,0.5);
`;

export const Input = styled.input`
background-color: transparent;
border: 0;
font-size: 20px;
color: #fff;
outline: none;
margin-right: 8px;

&::placeholder {
    color: #f1f1f1;
}
`;

export const ButtonSearch = styled.button`
background-color: transparent;
border: 0;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

&:hover {
    background-color: #4CAF50;
}
`;

export const IconSearch = styled(FiSearch)`
font-size: 25px;
color: #FFF;
`;

export const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #fff;
width: 500px;
border-radius: 8px;

@media(max-width: 620px){
    width: 80%;
    min-height: 150px;
}
`;

export const Cep = styled.h2`
margin: 16px 0;
font-size: 39px;

@media(max-width: 620px){
    font-size: 28px;
}
`;

export const Address = styled.span`
margin-bottom: 16px;
font-weight: bold;
`;

