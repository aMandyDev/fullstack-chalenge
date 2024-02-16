import React, { useEffect, useState } from 'react';
import router from 'next/router';
import Image from 'next/image';
import Pokemon from '../../public/assets/pik_inicial.png'
import ComponentWithIcon from '../TitleWithIcon';
import { isAuthenticated } from '../auth';
import api from '../api';
import ModalHunterPokemon from '../ModalHunterPokemon/indext';
import { Card, Container, Wrapper, CardWrapper, FilterContainer, FilterSelect, Modal } from './styles';

const Dashboard: React.FC = () => {
    const [filter, setFilter] = useState('');
    const [myTypes, setMyTypes] = useState<string[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<any>(null);
    const [hunter, setHunter] = useState<any>({ pokemons: [] });
    const [modalOpen, setModalOpen] = useState<any>(false);
    const [openEdit, setOpenEdit] = useState<any>(false);
    const [newNamePokemon, setNewNamePokemon] = useState('');

    useEffect(() => {
        try {
            if (!isAuthenticated()) {
                router.push('/login');
            } else {
                const hunterId = localStorage.getItem('hunterId');
                const res: any = api.get(`/v1/fullStackChalenge/hunter?hunterId=${hunterId}`).then((response) => {
                    setHunter(response.data);
                });
                console.log('login', res.data)
            }

        } catch (error) {
            console.error('Error', error);
        }
        const typesPokeHunter = hunter.pokemons.map((pokemon: any) => pokemon.types).flat();
        const filterTypes = typesPokeHunter.filter((item: any, index: any) => {
            return typesPokeHunter?.indexOf(item) === index;
        });
        setMyTypes(filterTypes);
    }, [hunter]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
    };

    const filterCards = () => {
        switch (filter) {
            case 'A-Z':
                return [...hunter.pokemons].sort((a: any, b: any) => (a.name > b.name ? 1 : -1));
            case 'Data de captura':
                return hunter.pokemons.sort((a: any, b: any) => new Date(a.captured).getTime() - new Date(b.captured).getTime());
            default:
                if (myTypes.includes(filter)) {
                    return hunter.pokemons.filter((pokemon: any) => pokemon.types.includes(filter));
                } else {
                    return hunter.pokemons;
                }

        }
    };

    const capitalizeFirstLetter = (str: string | string[]) => {
        if (typeof str === 'string') {
            return str.charAt(0).toUpperCase() + str.slice(1);
        } else if (Array.isArray(str)) {
            return str.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(',');
        } else {
            return '';
        }
    };

    const handleClick = (pokemon: any) => {
        setSelectedPokemon(pokemon);
    };

    const handleSaveName = async (name: string, selectedPokemon: any) => {
        const pokemonId = selectedPokemon._id
        const hunterId = localStorage.getItem('hunterId')
        const res = await api.put(`/v1/fullStackChalenge/pokemon?hunterId=${hunterId}`, { name, pokemonId });
        router.reload();
    };

    const handlePokemonHunt = () => {
        setModalOpen(true);
    }
    const handleLogout = () => {
        localStorage.removeItem('@chalenge-Token');
        localStorage.removeItem('hunterId');
        router.push('/login');
    };

    return (
        <Wrapper>
            <div className='containerButton'>
                <button className="logoutButton" onClick={handleLogout}>Sair</button>
            </div>
            <Container>

                {hunter.pokemons.length === 0 ? (
                    <>
                        <div className='messageNoPoke'>
                            <h1>Bem vindo! Você não tem nenhum Pokémon!</h1>
                            <Image
                                src={Pokemon}
                                alt="pokemon"
                                width={250}
                                height={280}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <h1>Meus Pokémons</h1>
                        <FilterContainer>
                            <p>Organizar Por:</p>
                            <FilterSelect value={filter} onChange={handleFilterChange}>
                                <option className='option' value="A-Z">A-Z</option>
                                <optgroup label="Tipo">
                                    {myTypes.map((types, index) => (
                                        <option key={index} value={types}>{types}</option>
                                    ))}
                                </optgroup>
                                <option className='option' value="Data de captura">Data de captura</option>
                            </FilterSelect>
                        </FilterContainer>

                        <CardWrapper>
                            {filterCards().map((pokemon: any, index: any) => (
                                <div key={index} onClick={() => handleClick(pokemon)}>
                                    <Card>
                                        <Image
                                            src={pokemon.image}
                                            alt={`pokemon ${index + 1}`}
                                            width={250}
                                            height={280}
                                        />
                                        <div>
                                            <h3>{capitalizeFirstLetter(pokemon.name)}</h3>
                                            <p className='typePoke'>
                                                {pokemon.types.map((type: string, index: number) => (
                                                    <span className='types-card' key={index}>
                                                        {capitalizeFirstLetter(type)}
                                                        {index < pokemon.types.length - 1}
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    </Card>

                                </div>
                            ))}
                        </CardWrapper>
                    </>
                )}
                <button onClick={() => handlePokemonHunt()}>Caçar pokémon</button>
            </Container>
            {selectedPokemon && (
                <Modal>
                    <div className="modalContent">
                        <span onClick={() => setOpenEdit(true)}>
                            <ComponentWithIcon title={capitalizeFirstLetter(selectedPokemon.name)} />
                            {
                                openEdit &&
                                <div className='buttonName'>
                                    <input className='inputName' value={newNamePokemon} onChange={(e) => setNewNamePokemon(e.target.value)} />
                                    <span onClick={() => handleSaveName(newNamePokemon, selectedPokemon)}>Salvar</span>
                                </div>
                            }

                        </span>
                        <Image
                            src={selectedPokemon.image}
                            alt={selectedPokemon.name}
                            width={250}
                            height={280}
                        />
                        <div className='all-info'>
                            <span className='title'>Altura</span>
                            <p>{selectedPokemon.height}</p>
                            <span className='title'>Peso</span>
                            <p>{selectedPokemon.weight}</p>
                            <span className='title'>Capturado em:</span>
                            <p>{selectedPokemon.captured}</p>
                            <div className="types">
                                <span className='title'>Tipo:</span>
                                {selectedPokemon.types.map((type: string, index: number) => (
                                    <span className='items' key={index} >{capitalizeFirstLetter(type)}</span>
                                ))}
                            </div>
                            <div className="abilities">
                                <span className='title'>Habilidades:</span>
                                {selectedPokemon.abilities.map((abilities: string, index: number) => (
                                    <span className='items' key={index} >{capitalizeFirstLetter(abilities)}</span>
                                ))}
                            </div>
                        </div>
                        <button onClick={() => setSelectedPokemon(null)}>Fechar</button>
                    </div>
                </Modal>
            )}
            {modalOpen && <ModalHunterPokemon />}
        </Wrapper>
    );
};

export default Dashboard;
