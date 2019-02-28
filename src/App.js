import React from 'react'
import styled from 'styled-components'
import Card from './components/Card'

const App = styled(({ className, ...props }) => (
  <div className={className}>
    <Card {...props} />
  </div>
))`
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  font-family: Raleway, sans-serif;
  text-align: center;
`

export default App
