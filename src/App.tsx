import React from 'react'

function App() {
  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault()

          // @ts-ignore
          console.log(e.target.can.value)
        }}
      >
        <input type="text" name="can" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
