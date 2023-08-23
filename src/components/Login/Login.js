// переиспользуем компонент Register
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Login.css';

export default function Login() {

    return (
        <section className='register'>
            <Logo/>
            <h2 className='register__title'>Рады видеть!</h2>
            <form className='register__form'>
                <label className='register__form-signature'>E-mail</label>
                <input className='register__form-item' type='email' required />
                <label className='register__form-signature'>Пароль</label>
                <input className='register__form-item register__form-item_password'
                    type='password' required />
                <button type='submit' className='register__button'>
                    <p className='register__button-title'>Войти</p>
                </button>
            </form>
            <div className='register__signature'>
                <p className='register__signature-title'>Ещё не зарегистрированы?</p>
                <Link to='/signup' className='register__login-link'>Регистрация</Link>
            </div>
        </section>
    )
}
