import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

let rootElement = document.getElementById('react-root')

const renderRoot = (element) => {
  render(
    <div>Hello Dev Server, again</div>,
    element
  )
}

if (rootElement) {
  renderRoot(rootElement)
}
