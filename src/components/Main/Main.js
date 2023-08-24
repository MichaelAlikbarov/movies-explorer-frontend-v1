import './Main.css';
import Promo from '../Promo/Promo';
import NavBarFuture from '../NavBarFuture/NavBarFuture';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main() {
    return (
        <main className='main'>
            <Promo/>
            <NavBarFuture/>
            <AboutProject/>
            <Techs />
            <AboutMe />
        </main>
    )
};

export default Main;
