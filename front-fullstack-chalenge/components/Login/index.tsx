import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Form, Input, Container, Label, Card, Wrapper } from './styles';
import { login } from '../auth';
import api from '../api';

const LoginForm: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res: any = await api.post('/v1/fullStackChalenge/authentication', { email, password });
            if (res.data.hunterId) {
                localStorage.setItem('hunterId', res.data.hunterId);
                login(res.data.token);
                router.push('/dashboard');
            }
        } catch (error: any) {
            alert(error.response.data.message)
            console.error('Login error:', error);
        }
    };

    return (
        <Wrapper>
            <Container>
                <Card>
                    <h1>Faça seu Login para começar a caças seus Pokémons</h1>
                    <Form>
                        <Label htmlFor="email">
                            <Input
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite seu endereço de e-mail"
                            />
                        </Label>
                        <Label htmlFor="password">
                            <Input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Digite sua senha"
                            />
                        </Label>
                        <button onClick={handleSubmit}>Entrar</button>
                    </Form>
                    <span>Ainda não tem conta? <Link href="/cadastro">Cadastre-se</Link></span>
                </Card>
            </Container>
        </Wrapper>
    );
};

export default LoginForm;
