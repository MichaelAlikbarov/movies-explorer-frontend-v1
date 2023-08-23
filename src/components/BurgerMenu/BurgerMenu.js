import Navigation from '../Navigation/Navigation';
import './BurgerMenu.css';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';
import xx from '../../images/xx.svg';

export default function BurgerMenu() {
    const {burgeMenuOpen, closeBurgerMenu} = useContext(CurrentUserContext);

    return(
        <div className={!burgeMenuOpen ? 'burger-menu' : 'burger-menu burger-menu_active'}>
            <img src={xx} alt='крестик закрыть' className='burger-menu__close' onClick={closeBurgerMenu} />
            <Link to='/' onClick={closeBurgerMenu} className='burger-menu__link'>Главная</Link>
            <Navigation />
        </div>
    )
}