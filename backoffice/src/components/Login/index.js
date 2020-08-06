//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import brand from '../../assets/images/logo-brand.png';
import './styles.scss';

//! == Composant ==
const Login = ({ getLogin, errorLog, username, password, setPasswordValue, setUsernameValue }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('cocuou');
        getLogin();
    };

    const hangleUsernameOnChange = (e) => {
        setUsernameValue(e.target.value);
    }
    const handlePasswordOnChange = (e) => {
        setPasswordValue(e.target.value);
    }
    return (
        <div className="login">
            <form className="login__form" onSubmit={handleSubmit}>
                <img src={brand} alt="brand" className="login__brand"/>
                <input 
                    value={username}
                    onChange={hangleUsernameOnChange} 
                    type="text" 
                    className="login__email" 
                    placeholder="User"
                />
                <input 
                    value={password}
                    onChange={handlePasswordOnChange} 
                    type="password" 
                    className="login__password" 
                    placeholder="Password"
                />
                <p className={errorLog ? "login__error" : "login__error--none"}>Votre nom d'utilisateur ou votre mot de passe est incorrecte</p>
                <button type="submit" className="login__submit" >Se connecter</button>
            </form>
        </div>
    );
};

//! == Export ==
export default Login;
