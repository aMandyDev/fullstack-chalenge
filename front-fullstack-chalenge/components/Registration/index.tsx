import React, { useState } from 'react';
import { Container, Form, Label, Input, DataPersonal, Address, Card } from './styles';
import router from 'next/router';
import api from '../api';

const RegistrationForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const handleSubmit = async () => {
        try {
            const dataHunter = {
                name,
                email,
                password,
                address: {
                    street,
                    number,
                    neighborhood,
                    city,
                    state
                }
            };
            const res = await api.post('/v1/fullStackChalenge/hunter/registration', dataHunter);
            console.log('Dados enviados com sucesso:', res.data);

            if (res.data) {
                alert('Registro bem-sucedido!');
                router.push('/login');
            }
        } catch (error: any) {
            console.error('Erro ao enviar formulário:', error.data.message);
            alert(error.data.message);
        }
    };
    const handleLogout = () => {
        router.push('/login');
    };

    return (
        <Container>
            <Card>
                <button className="logoutButton" onClick={handleLogout}>Voltar</button>
                <h1>Cadastre-se</h1>
                <Form>
                    <DataPersonal>
                        <Label htmlFor="fullName">
                            <Input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Nome completo"
                            />
                        </Label>
                        <Label htmlFor="email">
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="E-mail"
                            />
                        </Label>
                        <Label htmlFor="password">
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Crie uma senha"
                            />
                        </Label>
                    </DataPersonal>
                    <Address>
                        <h2>Endereço</h2>
                        <Label htmlFor="street">
                            <Input
                                type="text"
                                id="street"
                                name="street"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                placeholder="Logradouro"
                            />
                        </Label>
                        <Label htmlFor="number">
                            <Input
                                type="text"
                                id="number"
                                name="number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                placeholder="Número"
                            />
                        </Label>
                        <Label htmlFor="neighborhood">
                            <Input
                                type="text"
                                id="neighborhood"
                                name="neighborhood"
                                value={neighborhood}
                                onChange={(e) => setNeighborhood(e.target.value)}
                                placeholder="Bairro"
                            />
                        </Label>
                        <Label htmlFor="state">
                            <Input
                                type="text"
                                id="state"
                                name="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Cidade"
                            />
                        </Label>
                        <Label htmlFor="state">
                            <Input
                                type="text"
                                id="state"
                                name="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                placeholder="Estado"
                            />
                        </Label>
                    </Address>
                    <button onClick={handleSubmit}>Enviar</button>
                </Form>
            </Card>
        </Container>
    );
};

export default RegistrationForm;
