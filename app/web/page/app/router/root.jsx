import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'

export default function Root({ route }) {
  return (
    <div>
      <h1>root</h1>
      <div><Link to="/home">Home</Link></div>
      <div><Link to="/login">Login</Link></div>
      <div><Link to="/figure/new_tpl">new tpl</Link></div>
      <div><Link to="/video/list">video list</Link></div>
      { renderRoutes(route.routes) }
    </div>
  )
}