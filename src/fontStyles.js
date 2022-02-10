import { createGlobalStyle } from 'styled-components'
import Montserrat from './fonts/montserrat-regular.woff'
const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Montserrat';
  src: url(${Montserrat}) format('woff');
}
`

export default FontStyles
