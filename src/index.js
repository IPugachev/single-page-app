import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import FontStyles from './styles/fontStyles'
import { Global, theme } from './styles/global'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global />
    <FontStyles />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
