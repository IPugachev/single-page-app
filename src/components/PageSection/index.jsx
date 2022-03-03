import React from 'react'
import Comment from '../Comment'
import Datails from '../UI/Datails'
import Diagram from '../UI/Diagram'
import BulletList from '../UI/BulletList'
import * as S from './style'
import { ReactComponent as Comfort } from '../../assets/icons/comfort.svg'
import { ReactComponent as Convenience } from '../../assets/icons/convenience.svg'
import { ReactComponent as Cosiness } from '../../assets/icons/cosiness.svg'

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

const bulletListValues = [
  'Нельзя с питомцами',
  'Без вечеринок и мероприятий',
  'Время прибытия — после 13:00, а выезд до 12:00',
]

const reviews = [0, 1]

const PageSection = () => {
  return (
    <S.PageSection>
      <S.UpperBlock>
        <S.Info>
          <h5>Сведения о номере</h5>
          <S.DetailsBox>
            {variables.map((item) => (
              <Datails title={item.title} subtitle={item.subtitle} icon={item.icon} key={item.title} />
            ))}
          </S.DetailsBox>
        </S.Info>
        <S.RateDiagram>
          <h5>Впечатления от номера</h5>
          <Diagram />
        </S.RateDiagram>
      </S.UpperBlock>

      <S.CommentBlock>
        <S.BlockTitle>
          <h5>Отзывы посетителей номера</h5>
          <span>{reviews.length} отзыва</span>
        </S.BlockTitle>
        {reviews.map((item) => (
          <Comment index={item} key={item} />
        ))}
      </S.CommentBlock>
      <S.NoteBlock>
        <BulletList title='Правила' values={bulletListValues} />
        <S.Cancel>
          <h5>Отмена</h5>
          <p>
            Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите
            полный возврат за вычетом сбора за услуги.
          </p>
        </S.Cancel>
      </S.NoteBlock>
    </S.PageSection>
  )
}

export default PageSection
