import React from 'react'
import { renderRoutes } from 'react-router-config'

export default function VideoManager({ route }) {
  console.log(route);
  return (
    <div>
      <h2>Video Manager</h2>
      { renderRoutes(route.routes, { parent: 'FigureManager' }) }
    </div>
  )
}