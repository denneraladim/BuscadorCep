import {Container, Title, ContainerInput, Input, ButtonSearch,  IconSearch, Main, Cep, Address } from './styled';


export default function BuscadorCep(){
    return (
        <Container>
         <Title>Buscador Cep</Title>

        <ContainerInput>
            <Input
             type="text"
             placeholder="Digite seu cep..." 
            />

            <ButtonSearch>
            <IconSearch/>
            </ButtonSearch>
        </ContainerInput>

        <Main>
            <Cep>Cep: 79003222</Cep>

            <Address>Rua teste algum</Address>
            <Address>Complemento: Algum complemento</Address>
            <Address>Vila Rosa</Address>
            <Address>Campo Grande - MS</Address>
        </Main>
        </Container>
        
    )
}