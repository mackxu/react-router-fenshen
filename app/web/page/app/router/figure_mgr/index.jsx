import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom';

export default function FigureManager({ route }) {
  console.log(route);
  return (
    <div>
      <h2>FigureManager</h2>
      <Link to="/figure/new_tpl">new tpl</Link>
      <br/>
      <Link to="/figure/edit_tpl">edit tpl</Link>
      { renderRoutes(route.routes, { parent: 'FigureManager' }) }
    </div>
  )
}
