import { useEffect, useState } from "react";
import fetchMovies from "./api/movieData";
import Search from "./components/Search";
import Card from "./components/Card";

const App = () => {
  const [search, setSearch] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const getData = async () => {
    const data = await fetchMovies();
    // if (search === "") {
    setMovieData(data.movies);
    // }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="heading">Movie Finder</h1>
      <Search
        setSearch={setSearch}
        dateFrom={dateFrom}
        setDateFrom={setDateFrom}
        dateTo={dateTo}
        setDateTo={setDateTo}
        setMovieData={setMovieData}
        movieData={movieData}
      />
      <div className="movielist_parent">
        {movieData
          .filter((value) => {
            if (search === "") {
              return value;
            } else if (
              value.title.toString().toLowerCase().includes(search.toString().toLowerCase())
            ) {
              return value;
            }
            return false;
          })
          .map((movie) => (
            <Card {...movie} key={movie._id} />
          ))}
      </div>
    </>
  );
};

export default App;
