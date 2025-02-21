import React, { useState } from 'react'
import { FaUser, FaLock } from 'react-icons/fa';

import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if(username == "admin@admin.com" && password == "admin"){
            window.location.href ='/listarempresa'
        }
    }

    return (
        <div className='container-workspace'>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <img src="./src/assets/logo2.png" alt="" />
                    <h1>Seja bem Vindo!</h1>
                    <div className="input-field">
                        <input type="email" placeholder="E-mail" 
                        onChange={(e) => setUsername(e.target.value)}/>
                        <FaUser className="icon" />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Senha" 
                        onChange={(e) => setPassword(e.target.value)}/>
                        <FaLock className="icon" />
                    </div>

                    <div className='recall-forget'>
                        <label>
                            <input type="checkbox" />
                            Lembrar de mim
                        </label>
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                    <button>login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;