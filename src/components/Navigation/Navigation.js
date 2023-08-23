import './Navigation.css';
import { NavLink } from 'react-router-dom';
import ButtonProfileIcon from '../ButtonProfileIcon/ButtonProfileIcon.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

export default function Navigation() {
    const setActive = ({ isActive }) =>(isActive ? "navigation__item-link active" : "navigation__item-link");
    const {closeBurgerMenu} = useContext(CurrentUserContext);

    return(
        <nav className='navigation'>
            <ul className='navigation__list'>
                <li className='navigation__item_film'>
                    <NavLink to='/movies' className={setActive} onClick={closeBurgerMenu}>
                        Фильмы
                    </NavLink> 
                </li>
                <li className='navigation__item'>
                    <NavLink to='/saved-movies' className={setActive} onClick={closeBurgerMenu}>
                        Сохранённые фильмы
                    </NavLink>
                </li>
            </ul>
            <ButtonProfileIcon />
        </nav>
    )
}