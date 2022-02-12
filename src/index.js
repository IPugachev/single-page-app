import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import FontStyles from './styles/fontStyles'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
`
const theme = {
  colors: {
    primary: '#1F2041',
    secondary: '#BC9CFF',
  },
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global />
    <FontStyles />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
