import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Button,
    Box,
    Container,
} from '@mui/material';

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(`username: ${username}, password: ${password}`);

        // Adicione aqui a lógica de autenticação com chamadas de API assíncronas, usando o `await` para aguardar a resposta
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 8,
                }}
            >
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Nome de usuário"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Entrar
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};


