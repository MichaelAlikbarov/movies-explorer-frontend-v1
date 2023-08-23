import './Page404.css';
import { Link, useNavigate } from 'react-router-dom';

function Page404() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return(
        <div className='page404'>
            <h2 className='page404__title'>404</h2>
            <p className='page404__subtitle'>
                Страница не найдена
            </p>
            <button className="page404__link" onClick={goBack}>Назад</button>
        </div>
    )
}

export default Page404;