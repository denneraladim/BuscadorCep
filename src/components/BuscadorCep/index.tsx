
import { useState } from 'react';
import api from '../../services/api';

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

interface cepData {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    [key: string]: any;
}


export default function BuscadorCep() {

    const [input, setInput] = useState<string>('');
    const [cep, setCep] = useState<cepData>({});

    async function handleSearch(){
        
        if(input === ''){
            alert("Preencha algum cep!")
            return;
        }
        try {
            const response = await api.get(`${input}/json`);
            setCep(response.data)
            setInput("");

        }catch {
            alert("Ops erro ao buscar");
            setInput("");
        }
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

            {Object.keys(cep).length > 0 && (
                <Main>
                    <Cep>Cep: {cep.cep}</Cep>
                    <Address>{cep.logradouro}</Address>
                    <Address>Complemento: {cep.complemento}</Address>
                    <Address>{cep.bairro}</Address>
                    <Address>{cep.localidade} - {cep.uf}</Address>
                </Main>
            )}

            
        </Container>

    )
}