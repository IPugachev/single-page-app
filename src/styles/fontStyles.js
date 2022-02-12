import { createGlobalStyle } from 'styled-components'
import Montserrat from '../assets/fonts/Montserrat-VariableFont_wght.ttf'
const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Montserrat';
  src: 
  url(${Montserrat}) format('truetype');
}
`

export default FontStyles
