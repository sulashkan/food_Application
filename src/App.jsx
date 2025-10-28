import { useState } from 'react'
import SignUp from './Components/auth/signup/signUp'
import Routing from './router/Routing'


function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Routing />
</>

  )
}

export default App
