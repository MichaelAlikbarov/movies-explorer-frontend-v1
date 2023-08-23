import './ButtonProfileIcon.css';
import icon from '../../images/profile.svg';
import {useLocation, Link} from 'react-router-dom';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function ButtonProfileIcon() {
    const location = useLocation();
    const { closeBurgerMenu } = useContext(CurrentUserContext);
    
    return (
        <Link to='/profile' className='button-icon__link'>
            <button className='button-icon' type='button' onClick={closeBurgerMenu}>
                <p className='button-icon__title'>Аккаунт</p>
                <span className={
                    location.pathname === '/' ? 'button-icon__container' : 'button-icon__container button-icon__container_color'
                }>
                    <img src={icon}
                        className='button-icon__icon'
                        alt='иконка аккаунт'
                    />
                </span>
            </button>
        </Link>
    )
}
