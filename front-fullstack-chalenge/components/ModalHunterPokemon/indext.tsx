import React, { useEffect, useState } from "react";
import { isAuthenticated } from '../auth';
import router from 'next/router';
import api from '../api';
import ComponentWithIcon from '../TitleWithIcon';
import { Wrapper, Container, Modal } from "./styles";
import Image from "next/image";


const ModalHunterPokemon: React.FC = () => {
    const [pokemon, setPokemon] = useState<any>({});

    useEffect(() => {
        try {
            if (!isAuthenticated()) {
                router.push('/login');
            }
            const hunterId = localStorage.getItem('hunterId')
            const res: any = api.get(`/v1/fullStackChalenge/pokemon/hunt?hunterId=${hunterId}`).then((response) => {
                setPokemon(response.data);
            }).catch((err) => {
                alert(err.data.message);
            });
        } catch (error: any) {
            alert(error.data.message);
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
            //router.push('/dashboard');
            router.reload();
        });
    }

    return (
        <Modal>
            <div className="modalContent">
                <ComponentWithIcon title={pokemon?.name} />
                <Image
                    src={pokemon?.image}
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
                <button onClick={() => handlePokemonHunt()}>Caçar outro Pokemon</button>
                <button onClick={() => handleCaptured()}>Capturar</button>
            </div>
        </Modal>
    )
}
export default ModalHunterPokemon;