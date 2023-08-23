import './MoviesCard.css';
import label from '../../images/label.svg';
import labeloff from '../../images/labeloff.svg';
import useToggle from '../../hooks/useToggle';

export default function MoviesCard() {
    const [isVisible, toggleVisible] = useToggle(true);

    return(
        <li className='movies-card'>
            <img className='movies-card__img' 
                src='https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlsbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                alt='постер фильма' ></img>
            <div className='movies-card__container'>
                <div className='movies-card__signature'>
                    <h3 className='movies-card__title'>{'33 слова о дизайне'}</h3>
                    <button type='button' className='movies-card__label' onClick={toggleVisible}>
                        <img className='movies-card__label-img' src={isVisible ? label : labeloff} alt='кнопка сохранить фильм' />
                    </button>
                </div>
                <span className='movies-card__duration'>1ч 23мин</span>
            </div>
        </li>
    )
}