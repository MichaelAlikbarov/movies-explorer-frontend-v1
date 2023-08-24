import './Promo.css';
import promologo from '../../images/promologo.svg';

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <h2 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h2>
                <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a href='#about-project' className='promo__link'>
                    <button type='button' className='promo__button'>
                        <span className='promo__button-text'>Узнать больше</span>
                    </button>
                </a>
            </div>
            <img className='promo__logo'
                src={promologo}
                alt='logo'
            />
        </section>
    )
};

export default Promo;
