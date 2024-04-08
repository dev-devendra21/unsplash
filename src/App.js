
import { useEffect, useState } from 'react';
import './App.css';
import OptionItem from './components/OptionItem';
import SearchInput from './components/SearchInput';
import { createApi } from 'unsplash-js';

const api = createApi({
  accessKey: "Mf33duSQSE0WYCPlfJVU8qj0E0e43J5WFps8M1hgxhc"
});


function App() {
  const [data, setData] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    api.search
      .getPhotos({ query: "cat", orientation: "landscape", page: 2, perPage: 5 })
      .then(result => {
        console.log(result)
        setData(result);
      })
      .catch(() => {
        console.log('An error occurred');
      });
  }, []);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value)
  }
  return (
    <div className="main-container">
      <img src="unsplash.png" className='logo' alt="unsplash logo" />
      <SearchInput value={searchTerm} onSearchValue={handleSearchInput} />
      <section className='image-container'>
        <ul>
          <OptionItem />
        </ul>
      </section>
    </div >
  );
}

export default App;
