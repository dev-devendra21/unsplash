
import { useEffect, useState } from 'react';
import './App.css';
import OptionItem from './components/OptionItem';
import SearchInput from './components/SearchInput';
import ImageItem from './components/ImageItem';
import { createApi } from 'unsplash-js';
import Pagination from './components/Pagination';

import { OPTIONS, APISTATE } from './utils/constant';

const api = createApi({
  accessKey: "Mf33duSQSE0WYCPlfJVU8qj0E0e43J5WFps8M1hgxhc"
});




function App() {
  const [data, setData] = useState({
    status: APISTATE.IDLE,
    value: {},
    errorMsg: null,
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(0)
  const [title, setTitle] = useState('')
  useEffect(() => {
    setData((prev => {
      return { ...prev, status: APISTATE.LOADING }
    }))
    api.search
      .getPhotos({ query: title, orientation: "landscape", page, perPage: 8 })
      .then(result => {
        setData((prev => {
          return { ...prev, status: APISTATE.SUCCESS, value: result.response };
        }));
      })
      .catch(() => {
        setData((prev => {
          return { ...prev, status: APISTATE.ERROR, errorMsg: "An error occurred" };
        }))
      });
  }, [page, title]);

  const handleSearchValue = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = () => {
    setPage(1)
    setTitle(searchTerm)
    setSearchTerm("")
    console.log(data)
  }

  const handlePagination = (text) => {
    if (text === "Previous") {
      setPage(page - 1)
    }
    if (text === "Next") {
      setPage(page + 1)
    }

  }
  return (
    <div className="main-container">
      <img src="unsplash.png" className='logo' alt="unsplash logo" />
      <SearchInput value={searchTerm} onSearchValue={handleSearchValue} onSearch={handleSearch} />
      <section className='option-container'>
        <ul>
          {OPTIONS.map(option => (
            <OptionItem key={option.id} name={option.name} />
          ))}

        </ul>
      </section>
      <div className='title-container'>
        {title &&
          <p className='title'>{title}</p>
        }
      </div>
      {(data.status === APISTATE.SUCCESS && page > 0) && (


        <main className='image-container'>
          <ul>
            {
              data.value.results?.length > 0 &&
              (data.value.results.map(result => (
                <ImageItem key={result.id} imageSrc={result.urls.regular} altDescription={result.alt_description} />
              )))
            }
          </ul>
        </main>
      )
      }
      <footer> {page > 0 && <Pagination pageNo={page} setPageNo={handlePagination} />}</footer>
    </div >
  );
}

export default App;
