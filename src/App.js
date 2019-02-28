import React from 'react'
import { StyledApp } from './App.style'
import Card from './components/Card'

const App = props => (
  <StyledApp>
    <Card {...props} />
  </StyledApp>
)

export default App
