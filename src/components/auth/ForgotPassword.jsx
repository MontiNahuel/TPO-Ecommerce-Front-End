import React, {useState} from "react";
import '../../styles/LoginStyle.scss';

function ForgotPassword () {
    const [email, setEmail] = useState('');

    const handleEnviar = (e) => {
        e.preventDefault();
        if (email === '') {
            alert('Debe completar todos los campos');
            return;
        }
    }

    return (
        <div className="bodyLogin">
            <h1>Recuperar Contraseña</h1>
            <h2>Ingrese su correo electrónico</h2>
            <form className='login-form'>
                <div className="flex-row">
                    <input type="text" placeholder="email" className="lf--input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className="lf--submit">Enviar</button>
            </form>
        </div>
    )
}

export default ForgotPassword;