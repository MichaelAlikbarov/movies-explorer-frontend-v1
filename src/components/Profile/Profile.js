import './Profile.css';
import Header from '../Header/Header';
// import { useAuth } from '../../hooks/useAuth';
// import { useNavigate } from 'react-router-dom';

export default function Profile() {
    // const {signout, user } = useAuth();
    const user = 'AlMichael';
    // const navigate = useNavigate();

    return(
        <section className='profile'>
            <Header />
            <div className='profile__container'>
                <h2 className='profile__title'>Привет, {user}!</h2>
                <form className='profile__form'>
                    <div className='profile__item'>
                        <label className='profile__signature'>Имя</label>
                        <input className='profile__user-info' placeholder='Имя' defaultValue={user} />
                    </div>
                    <div className='profile__line'></div>
                    <div className='profile__item'>
                        <label className='profile__signature'>E-mail</label>
                        <input className='profile__user-info' placeholder='E-mail' defaultValue={'mail@mail.com'} def/>
                    </div>
                    <p className='profile__subtitle'>Редактировать</p>
                {/* <button onClick={() => signout(() => navigate('/', {replace: true}))}>Выйти из аккаунта</button> */}
                    <button className='profile__button' onClick={(e) => {e.preventDefault();}}>Выйти из аккаунта</button>
                </form>
            </div>
        </section>
    )
}