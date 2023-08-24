import './Logo.css';
import { Link, useLocation } from 'react-router-dom';

function Logo() {
    const location = useLocation();
    return(
        <Link to='/'>
            <div className={location.pathname === '/signin' || location.pathname === '/signup' ?
            'logo logo_pure' : 'logo'}>
            </div>
        </Link>
    )
}

export default Logo;