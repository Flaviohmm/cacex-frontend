import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, senha })
        });

        if (response.ok) {
            navigate('/');
        } else {
            alert('Erro ao realizar login');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Senha</label>
                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;