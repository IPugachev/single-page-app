import React from 'react'
import * as S from './style'

const Datails = ({ title, subtitle, icon }) => {
  return (
    <S.Item>
      {icon}
      <div>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </div>
    </S.Item>
  )
}

export default Datails
