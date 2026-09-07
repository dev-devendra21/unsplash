import { useEffect, useState } from "react";
import "./App.css";

import OptionItem from "./components/OptionItem";
import SearchInput from "./components/SearchInput";
import ImageItem from "./components/ImageItem";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";
import NoMoreImage from "./components/NoMoreImage";
import Error from "./components/Error";

import { OPTIONS, APISTATE } from "./utils/constant";
import unsplash from "./utils/unsplash";

const heroImages = [
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=85",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=85",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=2400&q=85",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2400&q=85",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2400&q=85",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=85",
];

const heroImage = heroImages[Math.floor(Math.random() * heroImages.length)];

function App() {
  const [data, setData] = useState({
    status: APISTATE.IDLE,
    value: {},
    errorMsg: null,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (!title.trim()) return;

    const fetchData = async () => {
      try {
        setData((prev) => ({
          ...prev,
          status: APISTATE.LOADING,
          errorMsg: null,
        }));

        const res = await unsplash.search.getPhotos({
          query: title,
          orientation: "landscape",
          page,
          perPage: 30,
        });

        if (res.status === 200) {
          setData((prev) => ({
            ...prev,
            status: APISTATE.SUCCESS,
            value: res.response,
            errorMsg: null,
          }));
        }
      } catch (err) {
        setData((prev) => ({
          ...prev,
          status: APISTATE.ERROR,
          errorMsg: err.message,
        }));
      }
    };

    fetchData();
  }, [page, title]);

  const handleSearchValue = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = ({ type, payload }) => {
    if (type !== "SEARCH" && type !== "OPTION") return;

    const value = payload?.trim();

    if (!value) return;

    setTitle(value);
    setPage(1);
    setSearchTerm("");
  };

  const handlePagination = (direction) => {
    setPage((prev) => {
      if (direction === "Previous") {
        return Math.max(1, prev - 1);
      }

      if (direction === "Next") {
        return prev + 1;
      }

      return prev;
    });

    window.scrollTo({
      top: document.querySelector(".discovery")?.offsetTop ?? 0,
      behavior: "smooth",
    });
  };

  const hasResults = data.value?.results?.length > 0;

  const popularSearches = ["Nature", "Architecture", "Travel", "People"];

  return (
    <div className="app">
      {/* ───────────────── HERO ───────────────── */}

      <header
        className="hero"
        style={{
          backgroundImage: `
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.42) 0%,
        rgba(0, 0, 0, 0.18) 35%,
        rgba(0, 0, 0, 0.52) 100%
      ),
      url("${heroImage}")
    `,
        }}
      >
        <nav className="navbar">
          <a href="/" className="brand">
            <img src="icon.png" className="brand-logo" alt="Photo Gallery" />

            <span className="brand-name">Pix Libre</span>
          </a>

          <div className="nav-right">
            <span className="nav-label">Explore</span>
            <span className="nav-label">Collections</span>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <span className="eyebrow">DISCOVER VISUAL INSPIRATION</span>

            <h1>
              Find the perfect
              <br />
              <em>image.</em>
            </h1>

            <p>Explore a world of beautiful, high-quality photography.</p>
          </div>

          <div className="hero-search">
            <SearchInput
              value={searchTerm}
              onSearchValue={handleSearchValue}
              onSearch={handleSearch}
            />
          </div>

          <div className="popular-searches" aria-label="Popular searches">
            <span>Popular:</span>

            {popularSearches.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  handleSearch({
                    type: "OPTION",
                    payload: item,
                  })
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="hero-credit">
          <span>Photo discovery</span>
          <span>Unsplash API</span>
        </div>
      </header>

      {/* ───────────────── DISCOVERY ───────────────── */}

      <section className="discovery">
        <div className="discovery-header">
          <div className="discovery-heading">
            <span className="section-eyebrow">
              {hasResults ? "SEARCH RESULTS" : "EXPLORE"}
            </span>

            <h2>
              {hasResults
                ? `Results for "${title}"`
                : "Discover beautiful images"}
            </h2>
          </div>

          <section className="option-container" aria-label="Explore categories">
            <ul>
              {OPTIONS.map((option) => (
                <OptionItem
                  key={option.id}
                  name={option.name}
                  onSelect={handleSearch}
                />
              ))}
            </ul>
          </section>
        </div>

        {/* ───────────────── STATUS ───────────────── */}

        {data.status === APISTATE.LOADING && (
          <div className="state-container">
            <Loader />
          </div>
        )}

        {data.status === APISTATE.ERROR &&
          data.errorMsg === "Failed to fetch" && (
            <div className="state-container">
              <Error />
            </div>
          )}

        {data.status === APISTATE.ERROR && data.errorMsg?.includes("JSON") && (
          <div className="state-container">
            <NoMoreImage />
          </div>
        )}

        {/* ───────────────── IMAGES ───────────────── */}

        {data.status === APISTATE.SUCCESS && (
          <main className="image-container">
            {hasResults ? (
              <ul className="image-grid">
                {data.value.results.map((result, index) => (
                  <ImageItem
                    key={result.id}
                    imageSrc={result.urls.regular}
                    description={result.description}
                    altDescription={result.alt_description}
                    placeholder={result.urls.thumb}
                    layoutClass={`bento-item bento-item-${(index % 10) + 1}`}
                  />
                ))}
              </ul>
            ) : (
              <NoMoreImage />
            )}
          </main>
        )}

        {/* ───────────────── PAGINATION ───────────────── */}

        {data.errorMsg !== "Failed to fetch" && hasResults && (
          <footer className="pagination-container">
            <Pagination
              pageNo={page}
              setPageNo={handlePagination}
              noMore={
                data.status === APISTATE.ERROR &&
                data.errorMsg?.includes("JSON")
              }
            />
          </footer>
        )}
      </section>

      {/* ───────────────── FOOTER ───────────────── */}

      <footer className="app-footer">
        <div className="footer-brand">
          <img src="icon.png" alt="" className="footer-logo" />

          <span>Crafted for visual discovery.</span>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} Photo Gallery
        </span>
      </footer>
    </div>
  );
}

export default App;
