import { useState } from 'react';
import axios from 'axios';
import './Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('https://zac.hackclub.app:9877/api/login', { email, password });
            window.location.href = '/dashboard';
        } catch (err) {
            alert('Login failed');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;