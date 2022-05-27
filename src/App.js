import './App.css';
import MoviesCarousel from './components/MoviesCarousel';
import MovieSearch from './components/MovieSearch/MovieSearch';
import Layout from './layout';

function App() {
  return (
    <Layout>
      <MoviesCarousel />
      <MovieSearch />
    </Layout>
  );
}

export default App;
