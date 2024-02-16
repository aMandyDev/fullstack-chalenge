import React, { useEffect, useState } from "react";
import { isAuthenticated } from '../auth';
import router from 'next/router';
import api from '../api';
import { Modal, ModalButtons, Header } from "./styles";
import Image from "next/image";


const ModalHunterPokemon: React.FC = () => {
    const [pokemon, setPokemon] = useState<any>({});
    const [modalOpen, setModalOpen] = useState<boolean>(true);

    useEffect(() => {
        try {
            if (!isAuthenticated()) {
                router.push('/login');
            }
            const hunterId = localStorage.getItem('hunterId')
            const res: any = api.get(`/v1/fullStackChalenge/pokemon/hunt?hunterId=${hunterId}`).then((response) => {
                setPokemon(response.data);
            })
                .catch((err) => {
                    let errorMessage = err.message || 'Ocorreu um erro ao buscar o Pokémon';
                    alert(errorMessage);
                });
        } catch (error: any) {
            let errorMessage = error.message || 'Ocorreu um erro ao buscar o Pokémon';
            alert(errorMessage);
        }
    }, []);

    const handlePokemonHunt = () => {
        const hunterId = localStorage.getItem('hunterId')
        const res: any = api.get(`/v1/fullStackChalenge/pokemon/hunt?hunterId=${hunterId}`).then((response) => {
            setPokemon(response.data);
        });
    }

    const handleCaptured = () => {
        const hunterId = localStorage.getItem('hunterId')
        const res: any = api.post(`/v1/fullStackChalenge/pokemon/register?hunterId=${hunterId}`, pokemon).then((response) => {
            router.reload();
        });
    }
    const handleClose = () => {
        setModalOpen(false);
    }

    return (
        modalOpen &&
        <Modal>
            <div className="modalContent">
                <Header>
                    <span onClick={() => handleClose()}>Fechar</span>
                    <h1>{pokemon.name} </h1>
                </Header>
                <Image
                    src={pokemon.image}
                    alt={pokemon.name}
                    width={250}
                    height={280}
                />
                <div className='all-info'>
                    <span className='title'>Altura</span>
                    <p>{pokemon.height}</p>
                    <span className='title'>Peso</span>
                    <p>{pokemon.weight}</p>
                    <span className='title'>Capturado em:</span>
                    <p>{pokemon.captured}</p>
                    <div className="types">
                        <span className='title'>Tipo:</span>
                        {pokemon?.types?.map((type: string, index: number) => (
                            <span className='items' key={index} >{type}</span>
                        ))}
                    </div>
                    <div className="abilities">
                        <span className='title'>Habilidades:</span>
                        {pokemon?.abilities?.map((abilities: string, index: number) => (
                            <span className='items' key={index} >{abilities}</span>
                        ))}
                    </div>
                </div>
                <ModalButtons>
                    <button className="capture" onClick={() => handleCaptured()}>Capturar</button>
                    <button onClick={() => handlePokemonHunt()}>Caçar outro Pokemon</button>
                </ModalButtons>
            </div>
        </Modal>
    )
}
export default ModalHunterPokemon;