
import { useState } from 'react';

import {
    Container,
    Title,
    ContainerInput,
    Input,
    ButtonSearch,
    IconSearch,
    Main,
    Cep,
    Address,
} from './styled';


export default function BuscadorCep() {

    const [input, setInput] = useState('');

    function handleSearch(){
        alert("Valor do input" + input);
    }
    return (
        <Container>
            <Title>Buscador Cep</Title>

            <ContainerInput>
                <Input
                    type="text"
                    placeholder="Digite seu cep..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <ButtonSearch onClick={handleSearch}>
                    <IconSearch />
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