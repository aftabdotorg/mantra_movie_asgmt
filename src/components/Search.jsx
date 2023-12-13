/* eslint-disable react/prop-types */
const Search = ({
  dateFrom,
  setDateFrom,
  dateTo,
  setDateTo,
  setMovieData,
  movieData,
  setSearch
}) => {
  const handleSubmit = () => {
    let temp = movieData.filter(
      (mov) =>
        mov.first_aired <= dateTo &&
        mov.first_aired >= dateFrom
    );
    setMovieData(temp);
  };

  return (
    <>
    <div className="query_search">
      <center><input type="text" alt="alter" className="query_search" placeholder="search movie..."  onChange={(e) => setSearch(e.target.value)} /></center>
    </div>
    <div className="search_parent">
      <div>From</div>
      <div>
        {" "}
        <input type="date" onChange={(e) => setDateFrom(e.target.value)} />{" "}
      </div>
      {/* <div> <input type="text" onChange={(e) => setDateFrom(e.target.value)} name='date_from' /> </div> */}
      <div>to</div>
      <div>
        {" "}
        <input type="date" onChange={(e) => setDateTo(e.target.value)} />{" "}
      </div>
      {/* <div> <input type="text" onChange={(e) => setDateTo(e.target.value)} /> </div> */}
      <div>
        <button className="search_btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
    </>
  );
};

export default Search;
