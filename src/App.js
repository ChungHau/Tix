import './App.css';
import MoviesCarousel from './components/MoviesCarousel';
import MovieSearch from './components/MovieSearch/';
import MoviesTab from './components/MoviesTab';
import Layout from './layout';

function App() {
  return (
    <Layout>
      <MoviesCarousel />
      <MovieSearch />
      <MoviesTab />
    </Layout>
  );
}

export default App;
