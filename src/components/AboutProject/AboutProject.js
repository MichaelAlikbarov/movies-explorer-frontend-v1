import './AboutProject.css';
import Headline from '../Headline/Headline';

function AboutProject() {
    return (
        <section className='about-project' id='about-project'>
            <Headline heading={'О проекте'} />
            <div className='about-project__info-container'>
                <div className='about-project__info'>
                    <h2 className='about-project__title'>Дипломный проект включал 5 этапов</h2>
                    <p className='about-project__subtitle'>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className='about-project__info'>
                    <h2 className='about-project__title'>На выполнение диплома ушло 5 недель</h2>
                    <p className='about-project__subtitle'>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className='about-project__timeline'>
                <p className='about-project__timeline-block about-project__timeline-block_green'>1 неделя</p>
                <p className='about-project__timeline-block'>4 недели</p>
                <p className='about-project__timeline-caption'>Back-end</p>
                <p className='about-project__timeline-caption'>Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;
