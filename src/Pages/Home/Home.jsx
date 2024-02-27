import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
const StyledLink = styled(NavLink)`
color: black;
text-decoration: none;
font-size: 20px;
`
const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'af02fe4d7c3feb4bd28b36239d2e4dd2';
export default function Home() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetch(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } 
        return Promise.reject(new Error('Сталась помилка'))
      })
      .then(movies => setResponse(movies.results))
      .catch(error => setError(error))
  }, [])
  return (
    <>
      {error && <h1>{error.message}</h1>}
      <h1>Trending today</h1>
      <ul>
        {response &&
          response.map(({id, title}) =>
            <li key={id}>
              <StyledLink to={`/movies/${id}`} state={{from: location}}>{title}</StyledLink>
            </li>)
        }
      </ul>
    </>
  )
}