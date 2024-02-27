import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'af02fe4d7c3feb4bd28b36239d2e4dd2';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export default function Cast() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } 
        return Promise.reject(new Error('Сталась помилка'))
      })
      .then(credits => setResponse(credits))
      .catch(error => {
        setError(error)
      })
  }, [movieId])
  
  return (
    <>
      {error && <h1>{error.message}</h1>}
      {response && <section>
        <ul>
          {response.cast.map(({id, profile_path, name, character}) =>
            <li key={id}>
              <img width='100px' src={`${IMG_URL}/${profile_path}`} alt="" />
              <p>{name}</p>
              <p>{character}</p>
            </li>)}
        </ul>
        </section>}
    </>
  )
}