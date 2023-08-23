import './SearchForm.css';
import tumbler from '../../images/smalltumb.svg';
import tumbleroff from '../../images/smalltumboff.svg';
import findIcon from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';
// import Preloader from '../Preloader/Preloader';
// import useToggle from '../../hooks/useToggle';

function SearchForm() {
    const [showTumbler, setShowTumbler] = useState(tumbler);
    // const [show, setShow] = useToggle();

    function handleToggle() {
        if (showTumbler === tumbler) {
            setShowTumbler(tumbleroff)
        } else setShowTumbler(tumbler)
    }

    function handlePreloader(e) {
        e.preventDefault()
        // <Preloader />
    }

    return(
        <section className='search-form'>
            <form className='search-form__form'>
            <div className='search-form__find-container'>
                <h2 className='search-form__title'>Фильм</h2>
                <button className='search-form__button' type='search' onClick={ handlePreloader }>
                    <img className='search-form__find-icon' src={findIcon} alt='иконка поиск' />
                </button>
            </div>
                <input className='search-form__input' type='search' placeholder='search film'></input>
            </form>
            <div className='search-form__container'>
                <FilterCheckbox showIcon={showTumbler} onToggle={handleToggle} />
            </div>
        </section>
    )
}

export default SearchForm;