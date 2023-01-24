import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const Home = lazy(async () => await import('./pages/Home'))
const Layout = lazy(async () => await import('./components/Layout/Layout'))
const MovieDetails = lazy(async () => await import('./pages/MovieDetails'))
const SearchPage = lazy(async () => await import('./pages/SearchPage'))
const Cast = lazy(async () => await import('./pages/Cast'))
const Reviews = lazy(async () => await import('./pages/Reviews'))
function App (): JSX.Element {
  return (
    <Suspense>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<SearchPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
    </Suspense>
  )
}

export default App
