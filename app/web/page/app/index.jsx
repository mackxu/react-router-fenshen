import React from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import routes from './router/routes'

export default function App() {
  return (
    <BrowserRouter>
      { renderRoutes(routes) }
    </BrowserRouter>
  )
}
