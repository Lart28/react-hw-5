import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'af02fe4d7c3feb4bd28b36239d2e4dd2';

export default function Reviews() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } 
        return Promise.reject(new Error('Сталась помилка'))
      })
      .then(reviews => setResponse(reviews))
      .catch(error => setError(error))
  }, [movieId])
  

  return (
    <>
      {error && <h1>{error.message}</h1>}
      {response && <section>
        <ul>
          {response.results &&
            response.results.map(({id, author, content}) =>
              <li key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
              </li>)
          }
          {response.results.length === 0 && <p>We don't have any reviews for this movie</p>}
        </ul>
      </section>}
    </>
  )
}
