import React from 'react'
import Card from './components/Card'
import { appStyle } from './App.style'

const App = appStyle(({ className, ...props }) => (
  <div className={className}>
    <Card {...props} />
  </div>
))

export default App
