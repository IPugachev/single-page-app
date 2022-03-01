import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import FontStyles from './styles/fontStyles'
import { Global, theme } from './styles/global'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global />
    <FontStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
