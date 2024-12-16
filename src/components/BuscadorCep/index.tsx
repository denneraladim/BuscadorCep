import {Container, IconSearch } from './styled';


export default function BuscadorCep(){
    return (
        <Container>
         <h1 className="title">Buscador Cep</h1>

        <div className="containerInput">
            <input
             type="text"
             placeholder="Digite seu cep..." 
            />

            <button className="buttonSearch">
            <IconSearch/>
            </button>
        </div>

        <main className='main'>
            <h2>Cep: 79003222</h2>

            <span>Rua teste algum</span>
            <span>Complemento: Algum complemento</span>
            <span>Vila Rosa</span>
            <span>Campo Grande - MS</span>
        </main>
        </Container>
        
    )
}