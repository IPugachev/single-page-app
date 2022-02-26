import React from 'react'
import { ReactComponent as Comfort } from '../../../assets/icons/comfort.svg'
import { ReactComponent as Convenience } from '../../../assets/icons/convenience.svg'
import { ReactComponent as Cosiness } from '../../../assets/icons/cosiness.svg'
import * as S from './style'

const variables = [
  {
    title: 'Комфорт',
    subtitle: 'Шумопоглощающие стены',
    icon: <Comfort />,
  },
  {
    title: 'Удобство',
    subtitle: 'Окно в каждой из спален',
    icon: <Convenience />,
  },
  {
    title: 'Уют',
    subtitle: 'Номер оснащён камином',
    icon: <Cosiness />,
  },
]

const Datails = (props) => {
  const actual = variables[props.number]
  return (
    <S.Item>
      {actual.icon}
      <div>
        <S.Title>{actual.title}</S.Title>
        <S.Subtitle>{actual.subtitle}</S.Subtitle>
      </div>
    </S.Item>
  )
}

export default Datails
