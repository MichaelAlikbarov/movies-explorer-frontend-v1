import {Routes, Route} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Page404 from '../Page404/Page404';
import Movies from '../Movies/Movies';
import Layout from '../Layout/Layout';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
// import RequireAuth from '../../hoc/RequireAuth';
// import {AuthProvider} from '../../hoc/AuthProvider';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useState } from 'react';

function App() {
    const [burgeMenuOpen, setBurgerMenuOpen] = useState(false);

    function handleShowMenu() {
        setBurgerMenuOpen(!burgeMenuOpen);
    }

    function closeBurgerMenu() {
        setBurgerMenuOpen(false);
    };

    let loggedin = true;
    // function auth() {console.log("test test")}

    return (
        <div className='app'>
            <CurrentUserContext.Provider value={{
                loggedin,
                burgeMenuOpen,
                handleShowMenu,
                closeBurgerMenu
            }}>
                <Routes>
                    <Route path='/'
                        element={<Layout />}>
                        <Route index
                            element={<Main/>}/>
                        <Route path='/movies'
                            element={<Movies/>}/>
                        <Route path='/saved-movies'
                            element={<SavedMovies/>}/>
                    </Route>
                    <Route path='/signin'
                        element={<Login />}/>
                    <Route path='/signup'
                        element={<Register />}/>
                    <Route path='/profile'
                        element={<Profile/>}/>
                    <Route path='*'
                        element={<Page404/>}/>
                </Routes>
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;
