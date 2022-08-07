// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import {React, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit

  const [username, setUsername] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(event.target.elements.usernameInput.value)
  }

  const handleChange = event => {
    const {value} = event.target

    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          type="text"
          id="usernameInput"
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
