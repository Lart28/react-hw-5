import { useEffect, useRef, useState, Suspense } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
const StyledInfo = styled.div`
  display: flex;
  gap: 15px;
`
const StyledLink = styled(NavLink)`
  border: 1px solid black;
  border-radius: 6px;
  font-weight: 600;
  margin: 10px 5px;
  display: block;
  max-width: 60px;
  text-decoration: none;
`
const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'af02fe4d7c3feb4bd28b36239d2e4dd2';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const BackLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetch(`${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } 
        return Promise.reject(new Error('Сталась помилка'))
      })
      .then(movie => setResponse(movie))
      .catch(error => setError(error))
  }, [movieId])
  
  return (
    <>
      <StyledLink to={BackLinkLocationRef.current}>Go Back</StyledLink>
      {error && <h1>{error.message}</h1>}
      {response &&
        <>
          <StyledInfo>
            <img width='250px' src={`${IMG_URL}/${response.poster_path}`} alt={`poster of movie ${response.title}`} />
            <div>
              <h1>{response.title} ({response.release_date.slice(0, 4)})</h1>
              <p>User score: {Math.round(response.vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{response.overview}</p>
              <h3>Genres</h3>
              <p>{response.genres.map(genre => genre.name + ' ')}</p>
            </div>
          </StyledInfo>
          <hr></hr>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to='cast'>Cast</Link>
              </li>
              <li>
                <Link to='reviews'>Reviews</Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>}
    </>
  )
}