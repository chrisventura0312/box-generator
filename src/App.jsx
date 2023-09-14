import { useState } from 'react'
import ColorBoxForm from './components/ColorBoxForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorBoxForm />
    </>
  )
}

export default App
