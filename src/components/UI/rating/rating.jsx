import React, { useState } from 'react'
import * as S from './style.jsx'

const RatingBtn = () => {
  const [rating, setRating] = useState(5)
  const getRating = () => {
    let ratingArr = []
    for (let i = 1; i < 6; i++) {
      i > rating ? ratingArr.push(<S.Unrate key={i} />) : ratingArr.push(<S.Rate key={i} />)
    }
    return ratingArr
  }
  return <S.Rating>{getRating()}</S.Rating>
}

export default RatingBtn
