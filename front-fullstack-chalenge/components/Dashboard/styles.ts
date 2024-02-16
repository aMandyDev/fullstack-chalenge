import styled from 'styled-components';

import typePokemonData from '../../types/typePokemon.json'; // Importe o arquivo typePokemon.json

// Função para obter a cor com base no tipo de Pokémon
const getTypeColor = (type: string): string | undefined => {
    const pokemonType = typePokemonData.find(pokemon => pokemon.name === type);
    return pokemonType ? pokemonType.color : undefined;
};

interface InitialsAvatarProps {
    size: number;
}

export const InitialsAvatar = styled.div<InitialsAvatarProps>`
    background-color: #007bff;
    color: #fff;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: ${props => props.size * 0.4}px;
    padding: 1rem;
`;

export const Wrapper = styled.div`
    padding: 1rem;
    .typePoke { 
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        text-align: center;
        .types-card {
                margin: 0.5rem;
                height: 2em;
                padding: 0.5rem;
                border-radius: 6px;
                font-weight: 600;
                width: 6rem;
                background-color: aquamarine;
            }
        }
`;

export const Container = styled.div`
    width: auto;
    height: auto;
    margin: 1rem;
    .messageNoPoke {
        display: flex;
        flex-direction: column;
        justify-content: center;
        h1 {
            display: flex;
            padding-top: 10rem;
            padding-bottom: 5rem;
            margin: auto;
        }
        img {
            display: flex;
            margin: auto;
        }
    }
    .avatarName {
        display: flex;
        justify-content: end;       
    }
    h1 {
        margin-top: 1rem;
        text-align: center;
    }

    button {
        display: flex;
        width: 16rem;
        border-radius: 6px;
        background-color: green;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: 600;
        margin: 1rem auto;
        padding: 0.7rem;
        border: none;
        box-shadow: none;
        font-size: 16px;
       
    }
    @media (min-width: 768px) {
        h1 {
            text-align: left;
        }
    }

    

`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  p {
    font-weight: 600;
    font-size: 16px;
    margin: 0.5rem;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }

`;

export const FilterSelect = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 0.5px #000006;
  border-radius: 6px;
  color: #747474;
  .option {
    font-weight: 600;
  }
`;

export const CardWrapper = styled.label`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-height: 1400px;
    overflow-y: auto;   
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
    @media (min-width: 768px) {
        max-height: 800px;
        justify-content: space-between;
        padding:1.5rem;
    }
`

export const Card = styled.label`
    display: grid;
    grid-template-rows: auto;    
    gap: 0.5rem;
    padding: 1rem;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .types-card {

    }
`;

export const UserAvatar = styled.input`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: aqua;
    `;

export const NoPokemon = styled.input`

`

export const Modal = styled.div`
    .modalContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 18rem;
        height: auto;
        position: fixed;
        top: 52%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #d3e1ea;
        padding: 1.25rem;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        .inputName{
            padding: 0.5rem;
        }

        button {
            display: flex;
            width: 7rem;
            border-radius: 6px;
            background-color: green;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: 600;
            margin: 1rem auto;
            padding: 0.7rem;
            border: none;
            box-shadow: none;
        }
        
        .all-info {
            background-color: #3399FF;
            display: flex;
            flex-direction: column;
            border-radius: 7px;
            padding: 0.5rem;
            width: 15rem;
            .title{
            color: white;
            font-size: 20px;
            font-weight: 600;
            }
            span,
            p {
              font-weight: 600;
              margin: 0.2rem;
            }
          
        }
        .types, 
        .abilities{
            flex-direction: column;
            display: flex;
            word-wrap: break-word;
            justify-content: space-between;
            flex-wrap: wrap;
            .items {
                border-radius: 6px;
                padding: 0.2rem;
                background-color: #ffe8af;
            }
        }
        
    }
`;