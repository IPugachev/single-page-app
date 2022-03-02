import React from 'react'
import Room1 from '../../assets/backgrounds/room1.png'
import Room2 from '../../assets/backgrounds/room2.png'
import Room3 from '../../assets/backgrounds/room3.png'
import * as S from './style'

const BackgroundGroup = () => {
  return (
    <S.BackgroundGroup>
      <S.BackgroundImg src={Room1} alt='background' />
      <S.BackgroundImg src={Room2} alt='background' />
      <S.BackgroundImg src={Room3} alt='background' style={{ marginTop: '-1px' }} />
    </S.BackgroundGroup>
  )
}

export default BackgroundGroup
