import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies() {
    return(
        <section className='movies'>
            <SearchForm />
            <MoviesCard />
        </section>
    )
}

export default Movies;