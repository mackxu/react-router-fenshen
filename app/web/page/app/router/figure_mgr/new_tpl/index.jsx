import React from 'react'

export default function NewTpl({ route }) {
  console.log(route);
  return (
    <div>
      new Tpl: { JSON.stringify(route) }
    </div>
  )
}
