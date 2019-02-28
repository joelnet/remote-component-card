import React from 'react'
import ReactDOM from 'react-dom'
import config from '../config/default.json'
import App from './App'

const rootElement = global.document.getElementById('app')

ReactDOM.render(<App {...config} />, rootElement)
