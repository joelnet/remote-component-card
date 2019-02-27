import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import config from '../config/default.json'
import styled from 'styled-components'

const App = styled(({ className }) => (
  <div className={className}>
    <Card {...config} />
  </div>
))`
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  font-family: Raleway, sans-serif;
  text-align: center;
`

const rootElement = document.getElementById('app')
ReactDOM.render(<App />, rootElement)
