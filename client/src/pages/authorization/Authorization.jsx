import { useState } from 'react';
import './Authorization.css';

const Authorization = () =>{

    const [status, setStatus] = useState('');

    const login = () =>{
        setStatus('login')
        
    }

    const registrate = () =>{
        setStatus('regist')
    }
    return(
        <div className="content">
            <div className="info_layout"></div>
            <div className="login_layout">
                <div className='authorizate'>
                    <div className='authorizate_form'>
                        <div className='logo'>ЛОГО</div>
                        <input className='auth email' type="text" placeholder='You Email'/>
                        <input className="auth pass" type="password" placeholder='Password'/>
                        <button className='button signIn' type='button' onClick={() => login()} >Войти</button>
                        <button className="button registrate" type='button' onClick={() => registrate()}>Зарегестрироваться</button>
                        <div className='response'>{status}</div>

                    </div>
                    
                    
                </div>
            </div>

        </div>
    )
}
export default Authorization;