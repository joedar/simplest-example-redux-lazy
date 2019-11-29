import React, { useState, useEffect } from 'react'
import Counter from '../components/counter'

export default () => {
  document.title = '关于我们'

  const [username, setUsername] = useState('joedar')

  useEffect(() => {
    fetchTest()
  }, [])

  const fetchTest = () => {
    console.log('fetchTest')
  }

  const changeUsernameClick = () => {
    setUsername('sandy')
  }

  return (
    <div>
      <h2>This is About Page.</h2>
      <Counter />
      <br />
      username is: {username}
      <br />
      <button onClick={changeUsernameClick}>修改名字</button>
    </div>
  )
}

