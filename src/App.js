
import { useEffect, useState } from 'react';
import './App.css';
import OptionItem from './components/OptionItem';
import SearchInput from './components/SearchInput';
import ImageItem from './components/ImageItem';
import Pagination from './components/Pagination';
import Loader from './components/Loader';

import { OPTIONS, APISTATE } from './utils/constant';
import unsplash from './utils/unsplash';
import NoMoreImage from './components/NoMoreImage';
import Error from './components/Error';


function App() {
  const [data, setData] = useState({
    status: APISTATE.IDLE,
    value: {},
    errorMsg: null,
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)
  const [title, setTitle] = useState('')
  useEffect(() => {
    if (title !== "") {
      async function fetchData() {
        try {
          setData((prev => {
            return { ...prev, status: APISTATE.LOADING, errorMsg: "" }
          }))
          const res = await unsplash.search
            .getPhotos({ query: title, orientation: "landscape", page, perPage: 8 })
          if (res.status === 200) {
            setData((prev => {
              return { ...prev, status: APISTATE.SUCCESS, value: res.response }
            }))
          }
        } catch (err) {
          setData((prev => {
            return { ...prev, status: APISTATE.ERROR, errorMsg: err.message }
          }))
        }
      }
      fetchData()
    }
  }, [page, title]);

  const handleSearchValue = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = ({ type, payload }) => {
    if (type === 'SEARCH') {
      setTitle(payload)
    }
    if (type === 'OPTION') {
      setTitle(payload)
    }
    setPage(1)
    setSearchTerm("")
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
      <img src="icon.png" className='logo' alt="website logo" />
      <SearchInput value={searchTerm} onSearchValue={handleSearchValue} onSearch={handleSearch} />
      <section className='option-container'>
        <ul>
          {OPTIONS.map(option => (
            <OptionItem key={option.id} name={option.name} onSelect={handleSearch} />
          ))}

        </ul>
      </section>
      <div className='title-container'>
        {(title && data.value.results?.length > 0) &&
          <p className='title'>{title}</p>
        }
      </div>
      <div>
        {data.status === APISTATE.LOADING && <Loader />}
      </div>
      <div>
        {
          ((data.status === APISTATE.ERROR) && (data.errorMsg === "Failed to fetch")) && <Error />
        }
        {
          ((data.status === APISTATE.ERROR) && (data.errorMsg.includes("JSON"))) && <NoMoreImage />
        }
      </div>
      <>
        {(data.status === APISTATE.SUCCESS) && (
          <main className='image-container'>
            <ul>
              {
                data.value.results?.length > 0 ?
                  (data.value.results.map(result => (
                    <ImageItem key={result.id} imageSrc={result.urls.regular} description={result.description} altDescription={result.alt_description} placeholder={result.urls.thumb} />
                  ))) : (<NoMoreImage />)
              }
            </ul>
          </main>
        )
        }
      </>
      <>
        {
          (data.errorMsg !== "Failed to fetch") && (
            <footer> {(data.value.results?.length > 0) && <Pagination pageNo={page} setPageNo={handlePagination} noMore={(data.status === APISTATE.ERROR) && (data.errorMsg?.includes("JSON"))} />}</footer>
          )
        }
      </>

    </div >
  );
}

export default App;
