import React from 'react'
import Counter from '../components/counter'

export default () => {
  document.title = '首页'
  return (
    <div>
      <h1>Index Page</h1>
      <Counter />
    </div>
  )
}
