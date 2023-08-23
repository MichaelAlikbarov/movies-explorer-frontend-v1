import './Header.css';
import Logo from '../Logo/Logo.js';
import { useLocation } from 'react-router-dom';
import NavBarHeader from '../NavBarHeader/NavBarHeader';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';
import burgerIcon from '../../images/icon-burger.svg';

export default function Header() {
    const { loggedin, handleShowMenu } = useContext(CurrentUserContext);
    const location = useLocation();

    return (
        <header className={ location.pathname === '/' ? 'header' : 'header header_wrapper' }>
            <Logo/> 
            { !loggedin ? <NavBarHeader /> : 
                <div className='header__nav_wrapper'>
                    <Navigation />
                </div> }
            <img className='header__burger-icon' src={burgerIcon} alt='' onClick={handleShowMenu} />
            <BurgerMenu />
        </header>
    );
}
