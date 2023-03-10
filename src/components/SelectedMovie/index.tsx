import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { filmData } from '../../utilities/interfaces'
import styles from './style.module.css'

function SelectedMovie ({ data }: { data: filmData | null }): JSX.Element {
  const location = useLocation()
  const prevLocation = location.state?.from

  if (data === null) {
    return <div>Oops, there is no such film</div>
  }

  const {
    backdrop_path: backdropPath,
    original_title: originalTitle,
    tagline,
    budget,
    genres,
    overview,
    release_date: releaseDate,
    vote_average: voteAverage
  } = data

  const joinedGenres = genres.map(genre => genre.name).join(', ')

  return (
    <section className={styles.movieSection}>
      <NavLink className={styles.button} state={location} to={prevLocation ?? '/'}>Go back</NavLink>
      <h1>{originalTitle}</h1>
      <p>{tagline}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${backdropPath}`}
        alt={originalTitle} />
      <p>{joinedGenres}</p>
      <p>Budget: $ {budget}</p>
      <p>Released: {releaseDate}</p>
      <p>Average vote: {voteAverage}</p>
      <p>{overview}</p>
      <NavLink className={styles.button} state={{ from: prevLocation }} to='cast'>Cast</NavLink>
      <NavLink className={styles.button} state={{ from: prevLocation }} to='reviews'>Reviews</NavLink>
      <hr />
      <Outlet />
    </section>
  )
}

export default SelectedMovie
