import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className='footer__container-title'>
                <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            </div>
            <div className='footer__container-info'>
                <div className="footer__copyright">
                    {
                    new Date().getFullYear()
                } </div>
                <ul className='footer__list'>
                    <li className='footer__list-item'>
                        <a className='footer__link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
                    </li>
                    <li className='footer__list-item'>
                        <a className='footer__link' href='https://github.com/MichaelAlikbarov'>Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
