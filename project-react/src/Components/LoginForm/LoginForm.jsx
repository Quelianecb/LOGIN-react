import React from 'react'
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";
const LoginForm = () =>{
    return(
        <div className="wrapper">
            <form>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Usuário" required/>
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Senha" required/>
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Esquecir a senha</label>
                    <a href="#">Senha</a>
                </div>
                <button type='submit'>Login</button>
                <div className="register-link">
                    <p>Não tenho cadastro?<a href="#">Registrar</a></p>
                </div>
            </form>
        </div>
    )
}
export default LoginForm;
