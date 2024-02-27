import { useEffect, useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom";

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'af02fe4d7c3feb4bd28b36239d2e4dd2';

export default function Movies() {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return
    }
    fetch(`${BASE_URL}/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } 
        return Promise.reject(new Error('Сталась помилка'))
      })
      .then(movies => setResponse(movies))
      .catch(error => setError(error))
  },[query])

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({query: inputValue});
    setInputValue('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label name="query">
          <input onChange={changeInputValue} name="query" type="text" value={inputValue} />
          <button type="submit">Search</button>
        </label>
      </form>
      {error && <h1>{error.message}</h1>}
      {response &&
        <ul>
          {response.results.map(({id, title}) =>
            <li key={id}>
              <Link to={`/movies/${id}`} state={{from: location}}>
                {title}
              </Link>
            </li>)}
        </ul>}
      </>
  )
}