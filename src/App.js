import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
import './App.css';


function App() {

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setQuery(term);
    setImages(result);
  }
  return (
  <div className='app'>
<header className='app-header'>
  <h1 className='app-title'>Image
    <span>.</span> Search
    </h1>
    <span className='app-tagline'>Powered by Unsplash</span>
</header>

    <SearchBar onSubmit={handleSubmit} />
    <ImageList images={images} query={query} />
  </div>
  );
}

export default App; 