import './Portfolio.css';
import arrow from '../../images/arrow.svg';


function Portfolio() {
    return(
        <section className='portfolio'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <ul className='portfolio__lists'>
                <li className='portfolio__list'>
                    <p className='portfolio__subtitle'>Статичный сайт</p>
                    <a className='portfolio__link' href='https://github.com/MichaelAlikbarov/how-to-learn' target='_blank' rel='noreferrer'>
                        <img src={arrow} alt='стрелка-указатель' />
                    </a>               
                </li>
                <li className='portfolio__list'>
                    <p className='portfolio__subtitle'>Адаптивный сайт</p>
                    <a className='portfolio__link' href='https://michaelalikbarov.github.io/russian-travel/' target='_blank' rel='noreferrer'>
                        <img src={arrow} alt='стрелка-указатель' />
                    </a>               
                </li>
                <li className='portfolio__list'>
                    <p className='portfolio__subtitle'>Одностраничное приложение</p>
                    <a className='portfolio__link' href='https://michaelalikbarov.github.io/mesto/' target='_blank' rel='noreferrer'>
                        <img src={arrow} alt='стрелка-указатель' />
                    </a>               
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;