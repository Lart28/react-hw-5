import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { lazy } from 'react';

const Home = lazy(()=> import('../Pages/Home'))
const MovieDetails = lazy(()=> import('../Pages/MovieDetails'))
const Movies = lazy(() => import('../Pages/Movies'))
const Cast = lazy(() => import('./Cast'))
const Reviews = lazy(() => import('./Reviews'))


export default function App(){
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/movies/:movieId' element={<MovieDetails />}>
            <Route path='/movies/:movieId/cast' element={<Cast />}></Route>
            <Route path='/movies/:movieId/reviews' element={<Reviews />}></Route>
          </Route>
          <Route path='*' element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

