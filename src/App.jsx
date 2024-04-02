import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { route } from './router'

const App = memo(() => {
  return (
    <div>
      {useRoutes(route)}
    </div>
  )
})

export default App