import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import FontStyles from './fontStyles'
import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
`

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <FontStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
