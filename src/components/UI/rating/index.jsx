import React from 'react'
import { ReactComponent as Star } from '../../../assets/icons/rate.svg'
import { ReactComponent as EmptyStar } from '../../../assets/icons/unrate.svg'
import * as S from './style.jsx'

const Rating = ({ rating }) => {
  const getRating = () => {
    let ratingArr = []
    for (let i = 1; i < 6; i++) {
      i > rating ? ratingArr.push(<EmptyStar key={i} />) : ratingArr.push(<Star key={i} />)
    }
    return ratingArr
  }
  return <S.Rating>{getRating()}</S.Rating>
}

export default Rating
