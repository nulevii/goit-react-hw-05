import React from 'react'
import { ReviewsResult } from '../../utilities/interfaces'
import style from './style.module.css'
function ReviewsInfo ({ reviewsInfo }: { reviewsInfo: ReviewsResult[] | null }): JSX.Element {
  if (reviewsInfo === null || reviewsInfo === undefined) {
    return <div>Reviews not found.</div>
  }
  console.log(reviewsInfo)
  return (
    <section className={style.castSection}>
      {reviewsInfo.map(({ id, author, content }) => (
        <article key={id}>
          <p>{author}</p>
          <q>{content}</q>
        </article>
      ))}

    </section>
  )
}

export default ReviewsInfo
