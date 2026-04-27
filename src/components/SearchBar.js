import './SearchBar.css';
import { useState } from 'react';


function SearchBar({onSubmit}) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(term.trim()) onSubmit(term);
    };

    //const handleChange = (event) => {
    //    setTerm(event.target.value);
    //}
    
  return (
     <div className='search-bar'>
    <form onSubmit={handleFormSubmit}>
       <span className="search-icon">⌕</span>
      <label>Enter Search Term</label>  
      <input value={term} 
      onChange={(e) => setTerm(e.target.value)}
      placeholder='Search some image...' 
      />
      <button type='submit'>Search</button>
    </form>
  </div>
  );
}

export default SearchBar; 