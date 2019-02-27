import React from 'react'
import styled from 'styled-components'
import config from '../config/default.json'
import Card from './components/Card'

const App = styled(({ className }) => (
  <div className={className}>
    <Card {...config} />
  </div>
))`
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  font-family: Raleway, sans-serif;
  text-align: center;
`

export default App
