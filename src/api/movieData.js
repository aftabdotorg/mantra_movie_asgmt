/* eslint-disable no-undef */
const url = process.env.REACT_APP_RAPID_API_URL;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
  },
};
const fetchMovies = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result
  } catch (error) {
    console.error(error);
  }
};

export default fetchMovies;
