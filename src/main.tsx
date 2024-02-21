import React from 'react'
import ReactDOM from 'react-dom/client'
import { List } from './components'
import { Global } from '@emotion/react'
import { GlobalStyles } from './globalStyles.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <List />
  </React.StrictMode>
)
