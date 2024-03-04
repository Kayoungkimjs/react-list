import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global } from '@emotion/react'
import { GlobalStyles } from './globalStyles.ts'
import Router from './Routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <Router />
  </React.StrictMode>
)
